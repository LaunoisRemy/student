import os
from databases import Database
from sqlalchemy import (Column, Integer, MetaData, Table,
                        create_engine)


DATABASE_URI = "postgresql://note_db_username:note_db_password@note_db:5432/note_db_dev"


engine = create_engine(DATABASE_URI)
metadata = MetaData()

notes = Table(
    'notes',
    metadata,
    Column('id', Integer, primary_key=True),
    Column('note', Integer),
    Column('student_id', Integer),

)

database = Database(DATABASE_URI)
