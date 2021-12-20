import { getAllBlogPosts } from "../../Lib/Data";
import { serialize } from "next-mdx-remote/serialize";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Head from "next/head";
import BlogInner from "../../Components/BlogInner";
import headingId from "remark-heading-id";
import Comment from "../../Components/Comment";
import { getHeadings } from "../../Lib/GetHeading";
import { SWRConfig } from "swr";


export const getStaticPaths = () => {
  const allBlogs = getAllBlogPosts();
  return {
    paths: allBlogs.map((blog) => ({
      params: {
        id: String(blog.data.Title.split(" ").join("-").toLowerCase()),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const params = context.params;
  const allBlogs = getAllBlogPosts();

  const page = allBlogs.find(
    (blog) =>
      String(blog.data.Title.split(" ").join("-").toLowerCase()) === params.id
  );

  const { data, content, readTime } = page;
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: { remarkPlugins: [headingId] },
  });

  const headings = await getHeadings(content);

  return {
    props: {
      data: data,
      content: mdxSource,
      id: params.id,
      headings: headings,
      readTime: readTime
    },
  };
};

function id({ data, content, id, headings, readTime }) {
  return (
    <>
      <Head>
        <title>{data.Title}</title>
        <meta name="title" content={data.Title} />
        <meta name="description" content={data.Abstract} />
      </Head>

      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar />
        <div className="py-24">
          <BlogInner data={data} content={content} headings={headings} readTime={readTime} />

          <SWRConfig>
             <Comment id={id}/>
          </SWRConfig>
           <br/>
           <br/>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default id;
