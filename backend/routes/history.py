from fastapi import APIRouter

from services.chat_service import get_chat

router = APIRouter()


@router.get("/history")
def history():
    return get_chat()