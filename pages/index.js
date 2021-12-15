import Head from 'next/head';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import BlogHeader from '../Components/BlogHeader';
import Footer from '../Components/Footer';
import Tag from '../Components/Tag';
import {datas} from './Data';
import { Vlogs } from './Data';


export const getStaticProps =()=>{

  return{
    props:{
      data: datas
    }
  }
}
export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Web-Infosys</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen relative bg-white dark:bg-gray-900'>
        <Navbar/>
        <Header/>
        
        <div className=" w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center ">
              {datas.map((tag,index) => (
               <Tag key={index} tag={tag}/>
              ))}
            </div>
         {/* vlog header map function */}
         <div className="px-0.5 md:px-7 pb-14 pt-6 mx-auto">
          <div className="flex flex-wrap">
            {Vlogs.map( (vlog)=> {
                const { id, tag, title, description, author, date } = vlog
                return (
                    <>
                        <BlogHeader key={id} id={id} tag={tag} title={title} description={description} author={author} date={date}  />
                        
                    </>
                )
            })}
              
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}