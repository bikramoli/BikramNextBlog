import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";

function BlogHeader({ data, content, readTime }) {
  return (
    <Link
      href={`/blogs/${String(data.Title.split(" ").join("-").toLowerCase())}`}
    >
      <div className="cursor-pointer group px-6 py-6 md:px-10 md:w-1/2 flex flex-col items-start rounded transform hover:bg-green-100 dark:hover:bg-gray-700 blogHeader">
        <span className="inline-block py-1 px-2 rounded bg-gray-100 dark:bg-indigo-900 text-indigo-700 dark:text-gray-200 text-sm font-medium tracking-widest">
          {data.Tags.split(" ")[0]}
        </span>
        <h2 className="sm:text-2xl text-xl title-font font-semibold text-gray-700 mt-4 mb-4 dark:text-gray-100 group-hover:text-indigo-800 dark:group-hover:text-indigo-400">
          {data.Title}
        </h2>
        <p className="leading-relaxed mb-5 text-gray-800 dark:text-gray-200">
          {data.Abstract}..
        </p>

        <div className="flex items-center flex-wrap pb-2 border-b-2 border-gray-300 mt-auto w-full justify-between dark:border-indigo-400">
          <a className="text-indigo-700 inline-flex items-center dark:text-indigo-200 group-hover:text-indigo-800 dark:group-hover:text-indigo-400">
            Learn More{" "}
            <span className="pl-1">
              <AiOutlineArrowRight />
            </span>
          </a>

          <a className="inline-flex items-center">
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-sm text-gray-600 dark:text-indigo-200">
                <h4>{data.Author}</h4>
              </span>
              <span className="flex text-gray-900 text-xs tracking-widest mt-0.5 dark:text-indigo-300">
                <span>{data.PublishedData.split(" ").join("-")}</span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </Link>
  );
}

export default BlogHeader;
