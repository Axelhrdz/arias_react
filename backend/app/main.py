from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from app.config import settings

app = FastAPI(title="Arias API", version="1.0.0")

# Allow requests from frontend (Vite default port is 5173)
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to ariasjoyeria shop remake!!"}
