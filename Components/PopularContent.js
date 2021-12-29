import { useEffect, useState } from "react";
import Link from "next/link";

function PopularContent({dat}) {
   const [newData, setNewData] = useState(dat)
    useEffect(()=>{
        const sortData = newData.sort((a,b)=> a-b).reverse()
        setNewData(sortData)
    },[])
    return (      
        <div>
            <h2 className=' m-2 mt-10 mb-4 font-bold text-indigo-500'>POPULAR CONTENT</h2>  
            {newData.map((d, i)=><Link key={i}  href={`/blogs/${d.data.Title.split(' ').join('-').toLowerCase()}`}><li 
            className="m-2 hover:text-red-700 underline list-none cursor-pointer">-{d.data.Title}</li></Link>)}                 
        </div>
    )
}
export default PopularContent;