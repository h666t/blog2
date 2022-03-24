import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import fs, {promises as fsPromise} from 'fs'
import path from 'path';
import getPosts from '../../../lib/posts';



const Posts: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  let blogList = await getPosts()
  res.write(JSON.stringify(blogList))
  res.end();
};

export default Posts;
