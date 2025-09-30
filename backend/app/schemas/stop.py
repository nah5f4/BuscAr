from pydantic import BaseModel, Field


class Stop(BaseModel):
    id: int = Field(alias="cp")
    name: str = Field(alias="np")
