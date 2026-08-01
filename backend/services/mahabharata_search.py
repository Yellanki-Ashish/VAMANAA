from services.mahabharata_vector_db import (
    semantic_search_mahabharata,
)


def search_mahabharata(question):

    results = semantic_search_mahabharata(question)

    documents = results["documents"][0]

    if len(documents) == 0:
        return "No Mahabharata reference found."

    formatted = ""

    for doc in documents:

        formatted += doc
        formatted += "\n\n----------------------------------------\n\n"

    return formatted