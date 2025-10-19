from app.core.database import Base
from sqlalchemy import Column, Double, Integer, String


class Stop(Base):
    __tablename__ = "stop"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    address = Column(String, index=False, nullable=False)
    latitude = Column(Double, index=False, nullable=False)
    longitude = Column(Double, index=False, nullable=False)
