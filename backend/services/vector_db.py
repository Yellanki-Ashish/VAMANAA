import os
import json
import chromadb

from sentence_transformers import SentenceTransformer

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GITA_PATH = os.path.join(BASE_DIR, "data", "gita.json")

# Create / Open ChromaDB
client = chromadb.PersistentClient(path="./chroma_db")

collection = client.get_or_create_collection(
    name="gita"
)

# Load Embedding Model
model = SentenceTransformer("all-MiniLM-L6-v2")


def load_scriptures():
    with open(GITA_PATH, "r", encoding="utf-8") as file:
        verses = json.load(file)

    return verses


def create_vector_database():

    verses = load_scriptures()

    if collection.count() > 0:
        print("Vector database already exists.")
        return

    for index, verse in enumerate(verses):

        text = f"""
Chapter {verse['chapter']}

Verse {verse['verse']}

Title:
{verse['title']}

English:
{verse['english']}
"""

        embedding = model.encode(text).tolist()

        collection.add(
            ids=[str(index)],
            embeddings=[embedding],
            documents=[text],
            metadatas=[verse],
        )

    print("Vector database created successfully.")


def semantic_search(query, n_results=5):

    query_embedding = model.encode(query).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results,
    )

    return results