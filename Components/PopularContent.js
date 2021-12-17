

function PopularContent({dat}) {
    return (
        <div>
            <h2 className=' m-2 mb-5 mb-10 font-bold text-indigo-900'>POPULAR CONTENT</h2>  
            {dat.map((d, i)=><li key={i}>{d.data.Title}</li>)}                 
        </div>
    )
}
export default PopularContent;