import {NextPage} from 'next';
import {useEffect, useState} from 'react';
import axios from 'axios';

type Blog = {
  id: number;
  content:string;
  date: string;
  title: string
}

const BlogsIndex: NextPage = () => {
  const [blogsList, setBlogList] = useState<Blog[]>([])
  useEffect(()=>{
    axios.get("/api/v1/blogs").then((response)=>{
      setBlogList(() => response.data)
    })
  },[])
  return (<>
    {blogsList.map((blog)=><div key={blog.id}>
      <div>id: {blog.id}</div>
      <div>content: {blog.content}</div>
      <div>date: {blog.date}</div>
      <div>title: {blog.title}</div>
    </div>)}
  </>)
}

export default BlogsIndex
