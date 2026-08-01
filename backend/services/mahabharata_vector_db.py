import os
import json
import chromadb

from sentence_transformers import SentenceTransformer

BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

MAHABHARATA_PATH = os.path.join(
    BASE_DIR,
    "data",
    "mahabharata.json",
)

client = chromadb.PersistentClient(path="./chroma_db")

collection = client.get_or_create_collection(
    name="mahabharata"
)

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


def load_mahabharata():

    with open(MAHABHARATA_PATH, "r", encoding="utf-8") as file:
        return json.load(file)


def create_mahabharata_vector_database():

    verses = load_mahabharata()

    if collection.count() > 0:
        print("Mahabharata vector database already exists.")
        return

    for index, verse in enumerate(verses):

        text = f"""
Parva: {verse['parva']}

Chapter: {verse['chapter']}

Verse: {verse['verse']}

Title:
{verse['title']}

Meaning:
{verse['english']}
"""

        embedding = model.encode(text).tolist()

        collection.add(
            ids=[str(index)],
            embeddings=[embedding],
            documents=[text],
            metadatas=[verse],
        )

    print("Mahabharata Vector Database Created Successfully.")


def semantic_search_mahabharata(query, n_results=5):

    query_embedding = model.encode(query).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results,
    )

    return results