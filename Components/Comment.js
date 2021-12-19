import {useState} from 'react';
import {Commentss} from "../pages/Data";
import {useSWRConfig, useSWR} from 'swr'; // swr is react hook library for data fetching -pros-> UI will be fast,light,resuable,realtime

function Comment({id}){
   const [comment, setComment] = useState("");
   const [commentsList, setCommentsList] = useState(Commentss);
    
   const {data} = useSWR(`api/comments/${id}`, ...args => fetch(...args).then((res)=> res.json));

   

    return(
        <>
        
            <div className="flex flex-wrap mb-6 mt-6 mx-auto max-w-screen-md">
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
                            onClick={handlePost}
                        >
                            Post
                        </button>
                        </div>
                    </form>
                </div>
                
            </div>
            <div className="mx-auto max-w-screen-md">
               <div className="m-2 md:m-0">
                {data.comments.map((comment,i) => (
                <div className="space-y-4 py-3" key={i}>
                    <div className="flex">
                        <div className="flex-shrink-0 mr-1.5 md:mr-3">
                            <img
                            className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                            src={comment.userImage}
                            alt={comment.userName}
                            />
                        </div>
                        <div className="flex-1 border border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                            <strong className="text-gray-700 dark:text-gray-200">
                            {comment.userName}
                            </strong>{" "}
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                            {comment.date.split(" ").slice(1, 4).join("-")}
                            </span>
                            {comment.comment.split("\n").map((com, index) => (
                            <p
                                className="text-sm text-gray-600 dark:text-gray-300"
                                key={index}
                            >
                                {com}
                            </p>
                            ))}
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