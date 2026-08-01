from fastapi import APIRouter
from services.daily_sloka import get_daily_sloka

router = APIRouter()


@router.get("/daily-sloka")
def daily_sloka():

    return get_daily_sloka()