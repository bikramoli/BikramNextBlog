import {useState} from 'react';
import {Commentss} from '../pages/Data';

function Comment(){
   const [comment, setComment] = useState(" ")
   const [commentsList, setCommentsList] = useState(Commentss)
    

    

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
                        className="bg-indigo-500 dark:bg-indigo-600 text-white px-3 py-1.5 rounded text-sm font-semibold mr-5"
                    >
                        Reset
                    </button>
                    <button
                        className="bg-indigo-500 dark:bg-indigo-600 text-white px-3 py-1.5 rounded text-sm font-semibold"
                        onClick={(e)=>{
                            e.preventDefault();
                        
                        }}
                    >
                        Post
                    </button>
                    </div>
                </form>
              </div>
            <div className='bg-red-500'>
            {commentsList.map((comments, i)=>(<h1 key={i}>{comments.name}:{comments.comment}</h1>))}
                
            </div>
            </div>
        </>
    )
}
export default Comment;