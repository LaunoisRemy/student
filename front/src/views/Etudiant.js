import {useEffect, useState} from "react";
import {urlStudent}          from "./Home";

function Etudiant({id, close, showNote}) {
    
    const [etudiant, setEtudiant] = useState({
        email: "",
        password: "",
        name: "",
        lastName: "",
    })
    if (showNote) id = null
    
    const getEtudiant = async (id) => {
        const response = await fetch(`${urlStudent}/student/${id}`)
        const data = await response.json()
        setEtudiant(data)
    }
    
    useEffect( () => {
        async function fetchData(id) {
            if(id != 0 && id !== null && !showNote) await getEtudiant(id)
        }
        
        fetchData(id)
    }, [id]);
    
    async function addEtudiant() {
        const req = await fetch(`${urlStudent}s`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(etudiant)
        })
        setEtudiant({
            email: "",
            password: "",
            name: "",
            lastName: "",
        })
        close(null)
    }
    
    return <section className={id === null ? "hidden" : ""}>
        <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
            <div onClick={() => close(null)} className="w-full h-full bg-gray-900 z-0 absolute inset-0"/>
            <div className="mx-auto container">
                <div className="flex items-center justify-center h-full w-full">
                    <div
                        className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
                        <div
                            className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                            <p className="text-base font-semibold">Create New User</p>
                            <button onClick={() => close(null)} className="focus:outline-none">
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
                            <section className="form_container">
                                <form className="mt-11">
                                    <section className="flex flex-row flex-wrap justify-between">
                                        <div className="my-2 w-1/2">
                                            <div className="flex flex-col lg:mr-16">
                                                <label htmlFor="firstname"
                                                       className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                                    FirstName
                                                </label>
                                                <input type="text" min="0" value={etudiant?.name}
                                                       onChange={(e) => setEtudiant({...etudiant, name: e.target.value})}
                                                       placeholder="Firstname" id="firstname" name="name"
                                                       aria-label="firstname" autoComplete="off" required className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2
                   focus:ring-offset-2 focus:ring-indigo-700 bg-white font-normal w-full h-10
                   flex items-center pl-3 text-sm border-gray-300 rounded border shadow"/>
                                            </div>
                                        </div>
                                        <div className="my-2 w-1/2">
                                            <div className="flex flex-col lg:mr-16">
                                                <label htmlFor="lastName"
                                                       className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                                    lastName
                                                </label>
                                                <input type="text" min="0" value={etudiant.lastName}
                                                       onChange={(e) => setEtudiant({...etudiant, lastName: e.target.value})}
                                                       placeholder="lastName" id="lastName" name="lastName"
                                                       aria-label="lastName" autoComplete="off" required className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2
                   focus:ring-offset-2 focus:ring-indigo-700 bg-white font-normal w-full h-10
                   flex items-center pl-3 text-sm border-gray-300 rounded border shadow"/>
                                            </div>
                                        </div>
                                        <div className="my-2 w-1/2">
                                            <div className="flex flex-col lg:mr-16">
                                                <label htmlFor="lastName"
                                                       className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                                    Email
                                                </label>
                                                <input type="email" min="0" value={etudiant.email}
                                                       onChange={(e) => setEtudiant({...etudiant, email: e.target.value})}
                                                       placeholder="Email" id="email" name="email"
                                                       aria-label="lastName" autoComplete="off" required className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2
                   focus:ring-offset-2 focus:ring-indigo-700 bg-white font-normal w-full h-10
                   flex items-center pl-3 text-sm border-gray-300 rounded border shadow"/>
                                            </div>
                                        </div>
                                        <div className="my-2 w-1/2">
                                            <div className="flex flex-col lg:mr-16">
                                                <label htmlFor="lastName"
                                                       className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                                    password
                                                </label>
                                                <input type="password" min="0" value={etudiant.password}
                                                       onChange={(e) => setEtudiant({...etudiant, password: e.target.value})}
                                                       placeholder="Password" id="password" name="password"
                                                       aria-label="Password" autoComplete="off" required className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2
                   focus:ring-offset-2 focus:ring-indigo-700 bg-white font-normal w-full h-10
                   flex items-center pl-3 text-sm border-gray-300 rounded border shadow"/>
                                            </div>
                                        </div>
                                    </section>
                                </form>
                            </section>
                            <div className="flex items-center justify-between mt-9">
                                <button onClick={() => close(null)}
                                        className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                                    Cancel
                                </button>
                                <button onClick={addEtudiant}
                                        className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 shadow rounded text-sm text-white">
                                    Add User
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Etudiant
