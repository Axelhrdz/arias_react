from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_HOST: str
    POSTGRES_PORT: int
    APP_ENV: str = "development"
    APP_PORT: int = 8000

    class Config:
        env_file = ".env"


settings = Settings()
