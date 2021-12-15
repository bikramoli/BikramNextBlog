
function Tag(props){
  
    return(
        <>
         <button className="inline-block px-3 ml-3 py-1 mb-4 text-xs font-semibold tracking-wider text-gray-50 uppercase rounded-full bg-indigo-500 dark:bg-indigo-600 hover:bg-red-500 cursor:pointer">
          <p>{props.tag}</p>
        </button>  
        </>
    )
}
export default Tag;