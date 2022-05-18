import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import fs, {promises as fsPromise} from 'fs'
import path from 'path';
import {getBlogList} from '../../../lib/blogs';
import {AppDataSource} from '../../../src/data-source';



const Blogs: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  let {manager} = AppDataSource;
  let blogList = manager.find('blog')
  res.write(JSON.stringify(blogList))
  res.end();
};

export default Blogs;
