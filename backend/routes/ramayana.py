from fastapi import APIRouter
import json
import os

router = APIRouter()

BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

RAMAYANA_PATH = os.path.join(
    BASE_DIR,
    "data",
    "ramayana.json",
)


@router.get("/ramayana/{kanda}")
def get_kanda(kanda: str):

    with open(RAMAYANA_PATH, "r", encoding="utf-8") as file:
        verses = json.load(file)

    result = []

    kanda = kanda.replace("%20", " ")

    for verse in verses:

        if verse["kanda"].lower() == kanda.lower():

            result.append(verse)

    return result


@router.get("/ramayana/{kanda}/{chapter}/{verse}")
def get_single_verse(kanda: str, chapter: int, verse: int):

    with open(RAMAYANA_PATH, "r", encoding="utf-8") as file:
        verses = json.load(file)

    kanda = kanda.replace("%20", " ")

    for item in verses:

        if (
            item["kanda"].lower() == kanda.lower()
            and item["chapter"] == chapter
            and item["verse"] == verse
        ):
            return item

    return {"message": "Verse not found"}