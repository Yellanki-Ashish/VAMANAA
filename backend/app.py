from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.ai import router as ai_router

from routes.profile import router as profile_router

from routes.daily import router as daily_router

from routes.history import router as history_router

from routes.auth import router as auth_router

from routes.ramayana import router as ramayana_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai_router)
app.include_router(auth_router)
app.include_router(profile_router)
app.include_router(history_router)
app.include_router(daily_router)
app.include_router(ramayana_router)

@app.get("/")
def home():
    return {
        "message": "Vamanaa Backend Running"
    }