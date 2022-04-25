import {useEffect, useState} from "react";
import {urlnote}             from "./Note";

const NoteForm = ({id, close, studentId, show}) => {
    const [note, setNote] = useState({
        "student_id": studentId,
        "note": null,
    });
    
    async function fetchNote(id) {
        const response = await fetch(`${urlnote}${id}`);
        const data = await response.json();
        setNote(data);
    }
    
    useEffect(() => {
        async function fetchNotes() {
            if (id != 0 && id !== null && show) fetchNote(id)
        }
        fetchNotes()
    }, [id]);
    
    function addNote() {
        let url = id !== null ? `${urlnote}/${id}` : urlnote;
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
            .then(() => {
                close(false);
            })
    }
    const deleteNote = () => {
        fetch(`${urlnote}/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(() => {
                close(false);
            })
    };
    
    return <section className={!show ? "hidden" : ""}>
        <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
            <div onClick={() => close(null)} className="w-full h-full bg-gray-900 z-0 absolute inset-0"/>
            <div className="mx-auto container">
                <div className="flex items-center justify-center h-full w-full">
                    <div
                        className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
                        <div
                            className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                            <p className="text-base font-semibold">Create New Note</p>
                            <button onClick={() => close(false)} className="focus:outline-none">
                                <svg width={28} height={28} viewBox="0 0 28 28" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 7L7 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M7 7L21 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                            <section className="">
                                <form className="mt-11">
                                    <section className="flex flex-row flex-wrap justify-between">
                                        {studentId === null && (
                                            <div className="my-2 w-1/2">
                                                <div className="flex flex-col lg:mr-16">
                                                    <label htmlFor="note"
                                                           className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                                        Id Etudiant
                                                    </label>
                                                    <input type="text" min="0" value={note?.note} placeholder="id"
                                                           id="id" name="id" aria-label="id" autoComplete="off"
                                                           onChange={(e) => setNote({...note, student_id: e.target.value})}
                                                           required className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2
                   focus:ring-offset-2 focus:ring-indigo-700 bg-white font-normal w-full h-10
                   flex items-center pl-3 text-sm border-gray-300 rounded border shadow"/>
                                                </div>
                                            </div>
                                        )}
                                        <div className="my-2 w-1/2">
                                            <div className="flex flex-col lg:mr-16">
                                                <label htmlFor="note"
                                                       className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                                    note
                                                </label>
                                                <input type="text" min="0" value={note?.note} placeholder="Note"
                                                       onChange={(e) => setNote({...note, note: e.target.value})}
                                                       id="note" name="note" aria-label="note" autoComplete="off"
                                                       required className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2
                   focus:ring-offset-2 focus:ring-indigo-700 bg-white font-normal w-full h-10
                   flex items-center pl-3 text-sm border-gray-300 rounded border shadow"/>
                                            </div>
                                        </div>
                                    </section>
                                </form>
                            </section>
                            <div className="flex items-center justify-between mt-9">
                                <button onClick={() => close(false)}
                                        className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                                    Cancel
                                </button>
                                {id !== null && (
                                    <button onClick={() => deleteNote()}
                                            className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                                        Delete
                                    </button>
                                    )}
                                <button
                                    onClick={addNote}
                                    className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Add Note
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default NoteForm
