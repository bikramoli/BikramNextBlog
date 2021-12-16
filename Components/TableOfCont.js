import Link from "next/link";
import React from "react";

import { Vlogs } from "../pages/Data";

function TableOfContent() {
    return(
        <nav className="sticky top-32 overflow-auto toc-inner">
            <ul>
            {Vlogs.map((vlog, index)=>
                <li key={index}  
                className="mt-4 text-lg text-gray-700 dark:text-gray-400">
                  <Link href={'/'}>{vlog.title}</Link>  
                </li>
            )}
            </ul>
        </nav>
        
    )
}
export default TableOfContent;