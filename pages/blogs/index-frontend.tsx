import {NextPage} from 'next';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useBlogs} from '../../hooks/useBlogs';


const BlogsIndexFrontend: NextPage = () => {
  const {blogsList} = useBlogs()
  return (<>
    {blogsList.map((blog) => <div key={blog.id}>
      <div>id: {blog.id}</div>
      <div>content: {blog.content}</div>
      <div>date: {blog.date}</div>
      <div>title: {blog.title}</div>
    </div>)}
  </>);
};

export default BlogsIndexFrontend;
