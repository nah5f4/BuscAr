from fastapi import FastAPI
from app.core.database import Base, engine
from app.models import rota

app = FastAPI()

# Cria as tabelas no banco (temporário — depois faremos via Alembic)
Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"status": "Banco conectado e API funcionando "}

