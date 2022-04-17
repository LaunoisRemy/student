from typing import Optional
from pydantic import BaseModel


class NoteIn(BaseModel):
    note: int
    student_id: int


class NoteOut(NoteIn):
    id: int


class NoteUpdate(NoteIn):
    note: Optional[int] = None
    student_id: Optional[int] = None
