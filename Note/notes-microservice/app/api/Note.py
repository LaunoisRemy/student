from fastapi import APIRouter, HTTPException
from typing import List

from app.api.models import NoteIn, NoteOut
from app.api import db_manager

notes = APIRouter()


@notes.get('/', response_model=List[NoteOut])
async def index():
    return await db_manager.get_all_notes()

@notes.get('/{id}', response_model=NoteOut)
async def get_notes(id: int):
    note = await db_manager.get_note(id)
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    return note

@notes.post('/', status_code=201)
async def add_note(payload: NoteIn):
    note_id = await db_manager.add_note(payload)
    response = {
        'id': note_id,
        **payload.dict()
    }
    return response


@notes.put('/{id}')
async def update_note(id: int, payload: NoteIn):
    movie = await db_manager.get_note(id)
    if not movie:
        raise HTTPException(status_code=404, detail="Note not found")

    update_data = payload.dict(exclude_unset=True)
    movie_in_db = NoteIn(**movie)

    updated_movie = movie_in_db.copy(update=update_data)

    return await db_manager.update_note(id, updated_movie)


@notes.delete('/{id}')
async def delete_note(id: int):
    note = await db_manager.get_note(id)
    if not note:
        raise HTTPException(status_code=404, detail="Movie not found")
    return await db_manager.delete_note(id)




