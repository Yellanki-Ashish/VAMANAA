from services.vector_db import semantic_search
from services.ramayana_search import search_ramayana
from services.mahabharata_search import search_mahabharata


def search_scriptures(question):

    # -----------------------------------
    # Bhagavad Gita
    # -----------------------------------

    gita_results = semantic_search(question)

    gita_docs = gita_results["documents"][0]

    gita_text = ""

    if len(gita_docs) > 0:

        for doc in gita_docs:

            gita_text += doc
            gita_text += "\n\n----------------------------------------\n\n"

    else:

        gita_text = "No Bhagavad Gita reference found."

    # -----------------------------------
    # Ramayana
    # -----------------------------------

    ramayana_text = search_ramayana(question)

    # -----------------------------------
    # Mahabharata
    # -----------------------------------

    mahabharata_text = search_mahabharata(question)

    # -----------------------------------
    # Combine
    # -----------------------------------

    return f"""
===========================
📖 BHAGAVAD GITA
===========================

{gita_text}

===========================
📖 RAMAYANA
===========================

{ramayana_text}

===========================
📖 MAHABHARATA
===========================

{mahabharata_text}
"""