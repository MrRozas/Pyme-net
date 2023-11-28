import pandas as pd
import json
import os

# Lee el archivo CSV desde la URL y lo carga en un DataFrame de pandas

def googlesheet(url):
    # Lee el archivo CSV desde la URL y lo carga en un DataFrame de pandas
    return pd.read_csv(url)
