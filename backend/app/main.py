from app.core.database import Base, engine
from app.models import line, line_stop, rota, stop  # noqa: F401
from fastapi import FastAPI

app = FastAPI()

# Cria as tabelas no banco (temporário — depois faremos via Alembic)
Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {"status": "Banco conectado e API funcionando "}
