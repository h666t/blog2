import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import fs, {promises as fsPromise} from 'fs'
import path from 'path';
import {getBlogList} from '../../../lib/blogs';



const Blogs: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  let blogList = await getBlogList()
  res.write(JSON.stringify(blogList))
  res.end();
};

export default Blogs;
