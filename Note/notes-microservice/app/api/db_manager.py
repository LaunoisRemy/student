from app.api.models import NoteIn, NoteOut, NoteUpdate
from app.api.db import notes, database


async def add_note(payload: NoteIn):
    query = notes.insert().values(**payload.dict())

    return await database.execute(query=query)


async def get_all_notes():
    query = notes.select()
    return await database.fetch_all(query=query)


async def get_note(id):
    query = notes.select(notes.c.id == id)
    return await database.fetch_one(query=query)


async def delete_note(id: int):
    query = notes.delete().where(notes.c.id == id)
    return await database.execute(query=query)


async def update_note(id: int, payload: NoteIn):
    query = (
        notes
        .update()
        .where(notes.c.id == id)
        .values(**payload.dict())
    )
    return await database.execute(query=query)
