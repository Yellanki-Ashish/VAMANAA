import json
import os
import random

BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

GITA_PATH = os.path.join(
    BASE_DIR,
    "data",
    "gita.json",
)


def get_daily_sloka():

    with open(GITA_PATH, "r", encoding="utf-8") as file:
        verses = json.load(file)

    verse = random.choice(verses)

    return {
        "chapter": verse["chapter"],
        "verse": verse["verse"],
        "title": verse["title"],
        "english": verse["english"],
    }