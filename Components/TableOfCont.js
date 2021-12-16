import Link from "next/link";
import React from "react";


function TableOfContent({headings}) {
    return(
        <nav className="sticky top-32 overflow-auto toc-inner">
            <ul>
            {headings.map((heading, index)=>
                <li key={heading.id}  
                className="mt-4 text-lg text-gray-700 dark:text-gray-400"
                style={{paddingLeft:"1rem", color: "#6366f1"}}
                >
                  <Link href={`#${heading.id}`}>{heading.text}</Link>  
                </li>
            )}
            </ul>
        </nav>
        
    )
}
export default TableOfContent;