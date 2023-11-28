import DropboxApi
import GoogleFormsApi

import pandas as pd
import json
import os

url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnVq2kPzzkUsqjgYqQ2Ckbeyj1oRNQQm8vrL9tb3lM3zkmcVEAQITVDZ1uvBNon2abk_v_I7ltMu89/pub?gid=1870803325&single=true&output=csv"
TOKEN = "sl.BgKqaUyv9qLt6mmj-ubkTwBwtktWbGdsc-KERR9oQ1Xk7kad7EAUsOn-G7pCsrkPBLz-X15OD_zeM81X0_FKbw3jq5QIFKGsE5POmla9GzUT9Nt1q_Xh_rI1wx_JQus064s25531Go5g"



def compare_and_rename(json1, json2):
    # Convierte los JSON en objetos Python
    data1 = json.loads(json1)
    data2 = json.loads(json2)
    
    # Itera sobre los objetos Python y realiza el cambio de nombre si los valores de "name" son iguales
    for obj1, obj2 in zip(data1, data2):
        if obj1["name"] == obj2["name"]:
            obj1["precio"] = obj2["precio"] 
    
    # Convierte el objeto Python en JSON actualizado con formato
    updated_json = json.dumps(data1, indent=4)
    
    return updated_json

""""
def formatear_json_con_separador_de_miles(data):
    if isinstance(data, dict):
        return {k: formatear_json_con_separador_de_miles(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [formatear_json_con_separador_de_miles(elem) for elem in data]
    elif isinstance(data, str):
        try:
            numero = float(data.replace(',', ''))
            return format(numero, ',')
        except ValueError:
            if data.lower() == "si":
                return True
            elif data.lower() == "no":
                return False
            else:
                return data
    else:
        return data
"""
def formatear_json_con_separador_de_miles(data):
    if isinstance(data, dict):  # Si es un diccionario
        return {k: formatear_json_con_separador_de_miles(v) for k, v in data.items()}  # Aplicar recursivamente a cada valor del diccionario
    elif isinstance(data, list):  # Si es una lista
        return [formatear_json_con_separador_de_miles(elem) for elem in data]  # Aplicar recursivamente a cada elemento de la lista
    elif isinstance(data, int) or isinstance(data, float):  # Si es un número entero o flotante
        return "{:,.0f}".format(data).replace(",", ".")  # Formatear el número con separador de miles y reemplazar la coma por punto decimal
    elif isinstance(data, str):  # Si es una cadena de texto
        if data.lower() == "si":  # Si la cadena es "si" (ignorando mayúsculas y minúsculas)
            return True  # Devolver True
        elif data.lower() == "no":  # Si la cadena es "no" (ignorando mayúsculas y minúsculas)
            return False  # Devolver False
        else:
            return data  # Devolver la cadena sin cambios
    else:
        return data  # Devolver cualquier otro tipo de dato sin cambios

def save_json(json_data, nombre):
    # Ruta absoluta del directorio de trabajo actual
    current_directory = os.getcwd()
    
    # Ruta de la carpeta de destino (relativa al directorio de trabajo actual)
    dest_folder = 'Proyecto/pyme-net/src/images'
    
    # Nombre y ruta absoluta del archivo JSON
    file_path = os.path.join(current_directory, dest_folder, nombre)
    
    # Formatear el JSON data
    formatted_json_data = json.dumps(json.loads(json_data), indent=4)
    
    # Guardar el archivo JSON
    with open(file_path, "w") as file:
        file.write(formatted_json_data)
    
    print(f"Archivo JSON guardado en: {file_path}")
# Llamada a la función main() del módulo DropboxApi para obtener el objeto main_object pasa objeto main_object a una cadena JSON con formato legible
main_object=json.dumps(DropboxApi.main(TOKEN), indent=4)
# Llamada a la función googlesheet() del módulo GoogleFormsApi para leer los datos desde la URL y eliminar la columna 'Marca temporal'

df_froms= (GoogleFormsApi.googlesheet(url)).drop(['Marca temporal'], axis=1)


json_data_productos_servicios = json.dumps(json.loads(df_froms.to_json(orient='records')), indent=4)
data = json.loads(json_data_productos_servicios)
data_formateada = formatear_json_con_separador_de_miles(data)
json_data_productos_servicios = json.dumps(data_formateada, indent=4)

save_json(json_data_productos_servicios,"servicios y productos.json" )
save_json(main_object,"Contenido.json")