from fastapi import APIRouter

from models.chat import ChatRequest
from services.ai_service import ask_ai

router = APIRouter()

@router.post("/ask")
def ask(request: ChatRequest):
    answer = ask_ai(request.message)

    return {
        "response": answer
    }