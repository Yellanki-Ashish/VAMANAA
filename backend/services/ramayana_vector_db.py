import os
import json
import chromadb

from sentence_transformers import SentenceTransformer

BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

RAMAYANA_PATH = os.path.join(
    BASE_DIR,
    "data",
    "ramayana.json",
)

client = chromadb.PersistentClient(path="./chroma_db")

collection = client.get_or_create_collection(
    name="ramayana"
)

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


def load_ramayana():

    with open(RAMAYANA_PATH, "r", encoding="utf-8") as file:
        return json.load(file)


def create_ramayana_vector_database():

    verses = load_ramayana()

    if collection.count() > 0:
        print("Ramayana vector database already exists.")
        return

    for index, verse in enumerate(verses):

        text = f"""
Kanda: {verse['kanda']}

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

    print("Ramayana Vector Database Created Successfully.")


def semantic_search_ramayana(query, n_results=5):

    query_embedding = model.encode(query).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results,
    )

    return results