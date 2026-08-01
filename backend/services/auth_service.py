import json
import os

from utils.security import (
    hash_password,
    verify_password,
    create_access_token,
)

BASE_DIR = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))
)

USERS_FILE = os.path.join(
    BASE_DIR,
    "data",
    "users.json",
)


def load_users():
    if not os.path.exists(USERS_FILE):
        return []

    with open(USERS_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def save_users(users):
    with open(USERS_FILE, "w", encoding="utf-8") as file:
        json.dump(users, file, indent=4)


def register_user(user):

    users = load_users()

    for existing in users:
        if existing["email"] == user.email:
            return {
                "success": False,
                "message": "Email already exists."
            }

    users.append(
        {
            "username": user.username,
            "email": user.email,
            "password": hash_password(user.password),
        }
    )

    save_users(users)

    return {
        "success": True,
        "message": "Registration successful."
    }


def login_user(user):

    users = load_users()

    for existing in users:

        if existing["email"] == user.email:

            if verify_password(
                user.password,
                existing["password"],
            ):

                token = create_access_token(
                    {
                        "sub": existing["email"]
                    }
                )

                return {
                    "success": True,
                    "access_token": token,
                    "token_type": "bearer",
                    "username": existing["username"],
                }

    return {
        "success": False,
        "message": "Invalid email or password."
    }