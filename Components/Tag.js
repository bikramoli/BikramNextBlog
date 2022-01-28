function Tag({ Tags }) {
  return (
    <>
      {blogs.map((blog, index) => (
        <button
          key={index}
          className=" inline-block px-3 ml-1.5 py-1.5 mb-4 text-xs font-semibold tracking-wider text-gray-50 uppercase rounded bg-indigo-500 dark:bg-indigo-600 hover:bg-red-500 dark:hover:bg-red-500 cursor:pointer"
          style={{ background: index === isActive ? "red" : "" }}
          onClick={() => {
            setSelectedTag(blog.data.Tags.split(" ")[1]);
            console.log(`selected tag: ${blog.data.Tags.split(" ")[1]}`);
            const filterData = blogs.filter(
              (dat) =>
                dat.data.Tags.split(" ")[1] === blog.data.Tags.split(" ")[1]
            );
            setBlogsData(filterData);
            console.log(filterData);
            setIsActive(index);
          }}
        >
          {blog.data.Tags.split(" ")[1]}
        </button>
      ))}
    </>
  );
}
export default Tag;
