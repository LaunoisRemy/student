from fastapi import FastAPI
from app.api.Note import notes
from app.api.db import metadata, database, engine

metadata.create_all(engine)

app = FastAPI()


@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()


app.include_router(notes, prefix='/api/v1/notes', tags=['notes'])
