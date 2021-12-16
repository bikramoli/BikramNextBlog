import React from "react";

import { Vlogs } from "../pages/Data";

function TableOfContent() {
    return(
        <div>
        {Vlogs.map((vlog, index)=>
            <li key={index}  
            className="mt-4 text-lg text-gray-700 dark:text-gray-400">
                {vlog.title}
            </li>
        )}
        </div>
    )
}
export default TableOfContent;