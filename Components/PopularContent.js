import Link from "next/link";


function PopularContent({dat}) {
    return (
        
        <div>
            <h2 className=' m-2 mb-5 mb-10 font-bold text-indigo-900'>POPULAR CONTENT</h2>  
            {dat.map((d, i)=><Link href={`/blogs/${d.data.Title.split(' ').join('-').toLowerCase()}`}><li key={i} 
            className="m-2 hover:text-indigo-900 underline list-none cursor-pointer">-{d.data.Title}</li></Link>)}                 
        </div>
    )
}
export default PopularContent;