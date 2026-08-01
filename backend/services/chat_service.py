import json
import os

BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

CHAT_FILE = os.path.join(
    BASE_DIR,
    "data",
    "chat_history.json",
)


def load_chat():

    if not os.path.exists(CHAT_FILE):
        return []

    with open(CHAT_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def save_chat(chat):

    with open(CHAT_FILE, "w", encoding="utf-8") as file:
        json.dump(chat, file, indent=4)


def add_chat(question, answer):

    print("Saving chat:", question)

    chat = load_chat()

    chat.append({
        "question": question,
        "answer": answer
    })

    save_chat(chat)

    print("Chat saved successfully.")

def get_chat():

    return load_chat()