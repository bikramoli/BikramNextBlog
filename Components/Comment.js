import {useState} from 'react';
import {Commentss} from "../pages/Data";

function Comment(){
   const [comment, setComment] = useState(" ")
   const [commentsList, setCommentsList] = useState(Commentss)
    
    return(
        <>
            <div className="flex flex-wrap mb-6 mt-6 mx-auto max-w-screen-md">
                <h1>{comment}</h1>
                <div className="relative container p-1 appearance-none label-floating">
                    <form>
                        <textarea
                        className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-100 border border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded  focus:outline-none focus:bg-white focus:border-gray-300 dark:focus:bg-gray-900 dark:focus:border-gray-700"
                        id="message"
                        type="text"
                        placeholder="Please provide some opinioh here..."
                        rows="3"
                        value={comment}
                        onChange={(e)=>{
                        setComment(e.target.value)
                        }}
                        />
                        <div className="text-right">
                        <button
                            className="bg-indigo-500 dark:bg-indigo-600 text-white px-3 py-1.5 rounded text-sm font-semibold"
                            onClick={(e)=>{
                                e.preventDefault();
                                console.log(commentsList);
                                setCommentsList([
                                    ...commentsList,
                                    comment
                                ])
                                setComment("")
                            }}
                        >
                            Post
                        </button>
                        </div>
                    </form>
                </div>
                
            </div>
            <div className="mx-auto max-w-screen-md">
               <div className="m-2 md:m-0">
                {commentsList.map((comment,i) => (
                <div className="space-y-4 py-3" key={i}>
                <div className="flex">
                 
                  <div className="flex-1 border border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong className="text-gray-700 dark:text-gray-200">
                      {comment.name}
                    </strong>{" "}
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {comment.date.split(" ").slice(1, 4).join("-")}
                    </span>
                   
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
        </>
    )
}
export default Comment;