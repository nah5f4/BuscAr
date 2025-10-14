from enum import Enum

from app.core.database import Base
from sqlalchemy import Column
from sqlalchemy import Enum as EnumDB
from sqlalchemy import Integer, String


class LineDirection(Enum):
    MAIN = 1
    SECONDARY = 2


class Line(Base):
    __tablename__ = "line"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    direction = Column(EnumDB(LineDirection), nullable=False)
