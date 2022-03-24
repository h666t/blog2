import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';

const Posts: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.write(JSON.stringify({name: 'frank'}));
  res.end();
};

export default Posts;
