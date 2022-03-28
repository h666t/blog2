import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';

const User: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let {name, password, passwordForConfirm} = req.body;
  res.setHeader('Content-Type', 'application/json')
  if (!name || !password || !passwordForConfirm) {
    res.statusCode = 400;
    res.write('缺少必要的参数');
    res.end();
    return;
  }
  if (password !== passwordForConfirm) {
    res.statusCode = 400;
    res.write('密码不一致');
    res.end();
    return;
  }
  res.statusCode = 200;
  res.write('成功');
  res.end();
};

export default User;
