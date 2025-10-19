from app.core.database import Base
from sqlalchemy import Column, ForeignKey


class LineStop(Base):
    __tablename__ = "line_stop"

    line_id = Column(ForeignKey("line.id"), index=True, primary_key=True)
    stop_id = Column(ForeignKey("stop.id"), index=True, primary_key=True)
