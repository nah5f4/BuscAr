from pydantic import BaseModel, Field


class Line(BaseModel):
    id: int = Field(alias="cl")
    base_name: str = Field(alias="lt")
    operation_mode: int = Field(alias="tl")
    direction: int = Field(alias="sl")
