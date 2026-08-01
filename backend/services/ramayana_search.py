from services.ramayana_vector_db import (
    semantic_search_ramayana,
)


def search_ramayana(question):

    results = semantic_search_ramayana(question)

    documents = results["documents"][0]

    if len(documents) == 0:
        return "No Ramayana reference found."

    formatted = ""

    for doc in documents:

        formatted += doc
        formatted += "\n\n---------------------------------\n\n"

    return formatted