import {useEffect, useState} from 'react';
import axios from 'axios';



export const useBlogs = () => {
  const [blogsList, setBlogList] = useState<Blog[]>([]);
  useEffect(() => {
    axios.get('/api/v1/blogs').then((response) => {
      setBlogList(() => response.data);
    });
  }, []);
  return {blogsList};
};
