import {useState, useEffect} from 'react';
import Head from 'next/head';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import BlogHeader from '../Components/BlogHeader';
import Footer from '../Components/Footer';
import { getAllBlogPosts } from '../Lib/Data';
import PopularContent from '../Components/PopularContent';


export const getStaticProps =()=>{
const allBlogs = getAllBlogPosts();
  return{
    props:{
      blogs: allBlogs
    }
  }
}
export default function Home({blogs}) {

  const [blogsData, setBlogsData] = useState(blogs);
  const [selectedTag, setSelectedTag] = useState();
  const [isActive, setIsActive] = useState(false);
  const [scrollHeight, setScrollHeight] = useState()
  
  useEffect(()=>{
   window.addEventListener('scroll', ()=>{
    setScrollHeight(window.scrollY)
   });
   return(()=>{
     window.removeEventListener('scroll', ()=>{
      setScrollHeight(window.scrollY)
     })
   })
  },[scrollHeight])
  
  return (
    <>
      <Head>
        <title>Digit-Infosys</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen relative bg-white dark:bg-gray-900'>
        <Navbar scrollHeight={scrollHeight}/>
        <Header/>

        <div className="mx-auto flex justify-center max-w-screen-xl">  
        {/* vlog header map function */}
         <div className="px-0.5 md:px-7 pb-14 pt-2 mx-auto mx-3 dark:bg-gray-800 bg-green-50">
           <h1 className='pl-10  font-bold text-indigo-500'>RECENTLY PUBLISHED</h1>
          <div className="flex flex-wrap">
            {blogsData.map( (blog)=> {
                return (
                    <>
                        <BlogHeader  
                        key={blog.data.Id}
                        data={blog.data}
                        content={blog.content}
                         /> 
                    </>
                )
            })}
              
          </div>
         </div>
             {/* Tag are displayed here.. */}
         <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 dark:bg-gray-800 bg-red-50">
          <nav className="sticky top-32 overflow-auto toc-inner">
            <h1 className=' m-2 mb-5 font-bold text-indigo-500'>TOP CATEGORIES</h1>

            {blogs.map((blog,index) => (
            <button key={index} className=" inline-block px-3 ml-1.5 py-1.5 mb-4 text-xs font-semibold tracking-wider text-gray-50 uppercase rounded bg-indigo-500 dark:bg-indigo-600 hover:bg-red-500 dark:hover:bg-red-500 cursor:pointer"
            style={{background:index=== isActive? "red": ""}}
      
            onClick={(e)=>{
              e.preventDefault();
              setSelectedTag(blog.data.Tags.split(" ")[1])
              const filterData = blogsData.find((dat)=>dat.data.Tags.split(' ')[1]=== selectedTag);
              setBlogsData([filterData])
              console.log(filterData)
              setIsActive(index)
            }}>
              {blog.data.Tags.split(" ")[1]}
            </button> 
            ))}
            <div>          
              <PopularContent dat={blogs}/>
            </div>
          </nav>
          </div>
        </div>
       
        <Footer/>
      </div>
    </>
  );
}