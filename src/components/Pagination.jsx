import React from 'react'

const Pagination = ({ pagenamber, paginet, next, previous, currentpage, filtercategory }) => {


    return (
        <div className={`${filtercategory.length > 0 ? "hidden" : "mt-6"}`}>


            <nav aria-label="Page navigation example">
                    
                <ul className="inline-flex -space-x-px text-sm">

                        <li onClick={previous}>
                            <a className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                 


                    {pagenamber.map((item, i) => (
                        <li onClick={() => paginet(i)}>
                            <a className={`${currentpage == i + 1
                                ? "cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-black dark:border-gray-700 dark:text-white dark:hover:bg-black dark:hover:text-white"
                                : "cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white"}`}>{item}</a>
                        </li>
                    ))}
                    
                        <li onClick={next}>
                            <a className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>

                </ul>

            </nav>

        </div>
    )
}

export default Pagination