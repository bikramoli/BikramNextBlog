import Link from "next/link";
import React,{useState} from "react";


function TableOfContent({headings}) {
    const [active, setActive] = useState("")
    return(
        <nav className="sticky top-32 overflow-auto toc-inner">
            <ul>
            {headings.map((heading, index)=>
                <li key={heading.id}  
                className="mt-4 text-lg text-gray-700 dark:text-gray-400"
                style={{paddingLeft:"1rem", 
                color: heading.id===active? "#6366f1": ""}}
                onClick={()=>{
                    setActive(heading.id)
                }}
                >
                  <Link href={`#${heading.id}`}>{heading.text}</Link>  
                </li>
            )}
            </ul>
        </nav>
        
    )
}
export default TableOfContent;