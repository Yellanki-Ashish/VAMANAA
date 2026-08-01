from fastapi import APIRouter, Header
from jose import jwt

from utils.security import SECRET_KEY, ALGORITHM
from services.auth_service import load_users

router = APIRouter()


@router.get("/me")
def get_profile(authorization: str = Header(None)):

    if authorization is None:
        return {
            "success": False,
            "message": "No token provided."
        }

    token = authorization.replace("Bearer ", "")

    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        email = payload["sub"]

        users = load_users()

        for user in users:
            if user["email"] == email:

                return {
                    "success": True,
                    "username": user["username"],
                    "email": user["email"]
                }

        return {
            "success": False,
            "message": "User not found."
        }

    except Exception:
        return {
            "success": False,
            "message": "Invalid token."
        }