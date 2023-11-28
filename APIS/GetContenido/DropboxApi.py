# importing necessary libraries
import dropbox
import pandas as pd
import json
import os
# Token Generated from dropbox

# Establish connection
def connect_to_dropbox(token):
    try:
        # Intenta establecer la conexión con Dropbox utilizando el token de autenticación
        dbx = dropbox.Dropbox(token)
        
        # Devuelve el objeto de conexión si se estableció correctamente
        return dbx
    except Exception as e:
        # Si ocurre una excepción, imprime el mensaje de error
        print(str(e))
        
        # Devuelve None en caso de error
        return None


def dropbox_list_files(path, token):
    # Establece la conexión con Dropbox utilizando el token de autenticación
    dbx = connect_to_dropbox(token)
    
    try:
        # Obtiene la lista de entradas en la carpeta especificada en 'path'
        entries = dbx.files_list_folder(path).entries
        files_list = []
        
        # Itera sobre cada entrada en la carpeta
        for entry in entries:
            # Si la entrada es un archivo, crea un diccionario con su metadato
            if isinstance(entry, dropbox.files.FileMetadata):
                metadata = {
                    'name': (entry.name).rsplit('.', 1)[0],  # Obtiene el nombre del archivo sin extensión
                    'path_display': entry.path_display,  # Obtiene la ruta de visualización del archivo
                    'folder': (entry.path_display).split("/")[2],  # Obtiene el nombre de la carpeta contenedora
                    'type': 'file'  # Indica que es un archivo
                }
                files_list.append(metadata)  # Agrega el metadato del archivo a la lista de archivos
            # Si la entrada es una carpeta, crea un diccionario con su metadato
            elif isinstance(entry, dropbox.files.FolderMetadata):
                metadata = {
                    'name': (entry.name).rsplit('.', 1)[0],  # Obtiene el nombre de la carpeta
                    'path_display': entry.path_display,  # Obtiene la ruta de visualización de la carpeta
                    'type': 'folder'  # Indica que es una carpeta
                }
                files_list.append(metadata)  # Agrega el metadato de la carpeta a la lista de archivos
        
        # Convierte la lista de metadatos de archivos a una cadena JSON con formato legible
        return json.dumps(files_list, indent=4)
    
    except Exception as e:
        # Si ocurre una excepción, imprime el mensaje de error
        print('Error al obtener la lista de archivos de Dropbox: ' + str(e))
        return None

def upload_file_to_dropbox(file_path, dropbox_path, token):
    # Establece la conexión con Dropbox utilizando el token de autenticación
    dbx = connect_to_dropbox(token)
    
    if dbx:
        try:
            # Abre el archivo en modo de lectura binaria
            with open(file_path, 'rb') as file:
                # Sube el contenido del archivo a Dropbox en la ruta especificada
                dbx.files_upload(file.read(), dropbox_path, mode=dropbox.files.WriteMode.overwrite)
                
            print('Archivo subido exitosamente a Dropbox')
        except Exception as e:
            print('Error al subir archivo a Dropbox:', str(e))
    else:
        print('No se pudo conectar a Dropbox')

import dropbox

def dropbox_get_link(dropbox_file_path, token):
    try:
        # Establece la conexión con Dropbox utilizando el token de autenticación
        dbx = connect_to_dropbox(token)
        
        # Intenta crear un enlace compartido con la configuración especificada para el archivo de Dropbox
        shared_link_metadata = dbx.sharing_create_shared_link_with_settings(dropbox_file_path)
        
        # Obtiene el enlace compartido generado
        shared_link = shared_link_metadata.url
        
        # Reemplaza el parámetro '?dl=0' por '?dl=1' para obtener un enlace de descarga directa
        return shared_link.replace('?dl=0', '?dl=1')
    
    except dropbox.exceptions.ApiError as exception:
        if exception.error.is_shared_link_already_exists():
            # Si el enlace compartido ya existe, obtiene el enlace compartido existente para el archivo
            shared_link_metadata = dbx.sharing_get_shared_links(dropbox_file_path)
            
            # Obtiene el enlace compartido existente
            shared_link = shared_link_metadata.links[0].url
            
            # Reemplaza el parámetro '?dl=0' por '?dl=1' para obtener un enlace de descarga directa
            return shared_link.replace('?dl=0', '?dl=1')

     
def filter_json(json_data, filter_criteria):
    try:
        # Carga los datos JSON en un objeto Python
        data = json.loads(json_data)
        
        # Filtra los elementos de los datos utilizando el criterio de filtrado especificado
        filtered_data = [item for item in data if filter_criteria(item)]
        
        # Convierte los datos filtrados a una cadena JSON con formato legible
        return json.dumps(filtered_data, indent=4)
    
    except Exception as e:
        # Si ocurre una excepción, imprime el mensaje de error
        print('Error al filtrar JSON: ' + str(e))
        return None
def filter_file_folder(filtered, criterio):
    # Filtra los elementos de la lista 'filtered' utilizando el criterio especificado
    filtered = [item for item in filtered if item["type"] == criterio]
    
    # Devuelve la lista filtrada
    return filtered

import json

def save_json_data(data, filename):
    """Guardar datos JSON en un archivo.

    Args:
        data: Los datos JSON a guardar.
        filename (str): El nombre del archivo en el que se guardarán los datos JSON.
    """
    try:
        # Abre el archivo en modo de escritura
        with open(filename, 'w') as file:
            # Escribe los datos JSON en el archivo
            json.dump(data, file)
        
        # Imprime un mensaje de éxito indicando que el archivo se ha guardado correctamente
        print(f"El archivo JSON '{filename}' se ha guardado exitosamente.")
    
    except Exception as e:
        # Si ocurre una excepción, imprime el mensaje de error
        print(f"Error al guardar el archivo JSON '{filename}': {str(e)}")


def get_files_list(filtered_folder, filtered_files, token):
    files_list = []

    # Itera sobre las carpetas filtradas
    for folder in filtered_folder:
        # Obtiene la lista de archivos en la carpeta actual utilizando la función dropbox_list_files
        file_in_folder = json.loads(dropbox_list_files(folder["path_display"], token))
        
        # Itera sobre los archivos en la carpeta actual
        for file in file_in_folder:
            # Crea un diccionario con los metadatos del archivo actual
            metadata = {
                'name': file["name"],
                'folder': (folder["path_display"]).split("/")[1],
                'link': dropbox_get_link(file["path_display"], token)
            }
            # Agrega los metadatos del archivo a la lista de archivos
            files_list.append(metadata)

    # Itera sobre los archivos filtrados independientes de las carpetas
    for file in filtered_files:
        # Crea un diccionario con los metadatos del archivo actual
        metadata = {
            'name': file["name"],
            'folder': (folder["path_display"]).split("/")[1],
            'link': dropbox_get_link(file["path_display"], token)
        }
        # Agrega los metadatos del archivo a la lista de archivos
        files_list.append(metadata)

    return files_list



def main(TOKEN):
    # Obtener la lista de archivos y carpetas en el directorio "/Imagenes"
    json_data = dropbox_list_files("/Imagenes", TOKEN)
    
    # Convertir los datos JSON en una lista de archivos y carpetas
    filtered_files_folder = json.loads(json_data)
    
    # Filtrar las carpetas de los archivos y obtener solo las carpetas
    filtered_folder = filter_file_folder(filtered_files_folder, "folder") 
    
    # Filtrar los archivos de los archivos y obtener solo los archivos
    filtered_files = filter_file_folder(filtered_files_folder, "file") 
    
    # Obtener la lista final de archivos con sus metadatos y enlaces
    main_object = get_files_list(filtered_folder, filtered_files, TOKEN)   

    return main_object





