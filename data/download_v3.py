import pandas as pd
from mcmetadata import extract
import mediacloud.api

import csv
import datetime
import requests
import json
import time

# Fonction pour récupérer les données de l'API à partir d'une URL
import requests

def get_api_data(url: str):
    """
    Retrieves data from the specified API endpoint using the provided URL.

    Args:
        url (str): The URL of the API endpoint.

    Returns:
        dict: A dictionary representing the JSON response from the API endpoint.

    Raises:
        requests.HTTPError: If the response status code is not 200.
    """
    response = requests.get(url)
    if response.status_code != 200:
        raise requests.HTTPError(f"Error {response.status_code} when requesting URL {url}")
    return response.json()

# Fonction pour écrire les erreurs dans un fichier de log
def log_error(url: str, error: str) -> None:
    """
    Logs an error message to a file.

    Args:
        url (str): The URL that caused the error.
        error (str): The error message to log.

    Returns:
        None
    """
    log_message = f"{datetime.datetime.now()} - {error} ; {url}\n"
    with open('log.txt', 'a') as log_file:
        log_file.write(log_message)


# Init the connection
mc = mediacloud.api.DirectoryApi('56196a395ee77c33a296073fa08e72f541362a10')

# Ouvrir le fichier CSV contenant les URLs
with open('query_v3.csv') as f:
    reader = csv.reader(f)
    urls = list(reader)

# Traiter chaque URL
for url in urls:
    url = url[1] # Extraire l'URL de la liste
    data = get_api_data(url) # Récupérer les données de l'API pour l'URL
    if data is not None:
        # Stocker les données récupérées dans un fichier JSON
        with open('data.json', 'a') as f:
            json.dump(data, f)
            f.write('\n')
    # Attendre 1 seconde entre chaque requête pour éviter de surcharger l'API
    time.sleep(1)
