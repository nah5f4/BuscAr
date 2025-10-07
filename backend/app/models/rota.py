from sqlalchemy import Column, Integer, String, Float
from app.core.database import Base

class Routes(Base):
    __tablename__ = "routes"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    average_speed = Column(Float)
    estimated_emission = Column(Float)

