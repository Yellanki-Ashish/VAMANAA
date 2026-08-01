import os

from dotenv import load_dotenv
from google import genai

from services.scripture_search import search_scriptures
from services.memory import (
    add_message,
    get_history,
)
from services.chat_service import add_chat

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def ask_ai(question: str):

    # ----------------------------------------
    # Retrieve previous conversation
    # ----------------------------------------

    history = get_history()

    history_text = ""

    for message in history:
        history_text += f"{message['role']}: {message['content']}\n"

    # ----------------------------------------
    # Search scriptures
    # ----------------------------------------

    scripture_context = search_scriptures(question)

    # ----------------------------------------
    # Build Prompt
    # ----------------------------------------

    prompt = f"""
You are Vamanaa AI.

You are an expert in:

• Bhagavad Gita
• Ramayana
• Mahabharata
• Sanatana Dharma
• Hindu Philosophy

Always answer respectfully.

==================================================
Conversation History
==================================================

{history_text}

==================================================
Relevant Scriptures
==================================================

{scripture_context}

==================================================
Current User Question
==================================================

{question}

==================================================
Instructions
==================================================

1. Use the scripture references whenever possible.
2. Mention Chapter and Verse whenever available.
3. Explain in simple English.
4. If no scripture exists, answer using authentic Hindu philosophy.
5. Never invent verses.
6. Continue the conversation naturally using previous chat history.
7. Keep answers respectful and easy to understand.
"""

    try:

        response = client.models.generate_content(
            model="gemini-3.1-flash-lite",
            contents=prompt,
        )

        answer = response.text

        # ----------------------------------------
        # Save conversation in memory
        # ----------------------------------------

        add_message("user", question)
        add_message("assistant", answer)

        # ----------------------------------------
        # Save conversation permanently
        # ----------------------------------------

        add_chat(question, answer)

        return answer

    except Exception as e:
        return f"Error: {e}"