import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const dir = path.join(process.cwd(), "_content");


export const getAllBlogPosts = () => {
  const allFiles = fs.readdirSync(dir);
  const allBlogs = [];

  allFiles.map((file) => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    //matter helps to convert a string with front-matter, below is front-matter
    // i.e.
    // title: hello
    // slug:home
    //<h1>Hello world</h1>
    //into an object given below
    // {
    //     content: '<h1>Hello world</h1>'
    //     data: {
    //         title:'hello',
    //         slug: 'home'
    //     }
    // }

    const { data, content } = matter(fileContent);
    const readTime = readingTime(content);
    allBlogs.push({ data, content, readTime});
  });

  return allBlogs;
};
