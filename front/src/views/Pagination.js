import React, {useEffect, useState} from "react";

export default function Pagination({currentPage, move, maxPage}) {
    const [paginate, setPaginate] = useState([]);
    
    function createPagination() {
        let array = []
        for (let i = 1; i <= maxPage; i++) {
            array.push(<p key={i} onClick={() => move(i)}
                             className={(i === currentPage ? "bg-indigo-600 text-white" : "text-gray-600") +
                                 "text-sm font-medium" +
                                 " leading-none" +
                                 " cursor-pointer" +
                                 " hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3" +
                                 " mr-4 px-2"}>{i}</p>)
        }
        
        setPaginate([...array])
    }
    
    useEffect(()=> {
        createPagination()
    }, [currentPage])
    
    return (
        <>
            <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                    <div onClick={() => move(currentPage - 1)}
                         className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                    </div>
                    <div className="sm:flex hidden">
                        {paginate.map(page => page)}
                    </div>
                    <div onClick={() => move(currentPage + 1)}
                         className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                        <p className="text-sm font-medium leading-none mr-3">Next</p>
                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}
