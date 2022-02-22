import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import useSWR, { useSWRConfig } from "swr"; // swr is react hook library for data fetching -pros-> UI will be fast,light,resuable,realtime

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Alert = (props) => (
  <div
    className={
      props.type === "err"
        ? "z-50 p-5 rounded-lg max-w-sm text-white bg-red-400 dark:bg-purple-600 font-medium inset-x-0 mx-auto"
        : "z-50 p-5 rounded-lg max-w-sm text-white bg-green-400 dark:bg-purple-600 font-medium inset-x-0 mx-auto"
    }
  >
    {props.message}
  </div>
);

function Comment({ id }) {
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const { mutate } = useSWRConfig();
  const { data } = useSWR(`/api/comments/${id}`, fetcher);

  const handlePost = async (e) => {
    e.preventDefault();
    setComment("");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      console.log("please login first");
      setShowAlert(true);
      setType("err");
      setMessage("Please login make comment...");
      setInterval(() => {
        setShowAlert(false);
      }, 3000);
    }

    if (comment && user) {
      const commentData = {
        userName: user.name,
        userImage: user.photo,
        comment: comment,
        date: Timestamp.now(),
        userId: user.uid,
      };
      const ref = collection(db, "posts", id, "comments");
      const docRef = await addDoc(ref, commentData);
      mutate(`api/post/${id}`);
      setShowAlert(true);
      setType("success");
      setMessage("Comment successful !!!");
      setInterval(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <>
      {" "}
      {showAlert ? <Alert message={message} type={type} /> : ""}
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
              onChange={(e) => {
                setComment(e.target.value);
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
          {data &&
            data.comments &&
            data.comments.map((comment) => (
              <div className="space-y-4 py-3" key={comment.id}>
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
                  {/* <div>
                    <button onClick={handleDelete(comment.id)}>
                      <AiFillDelete />
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
export default Comment;
