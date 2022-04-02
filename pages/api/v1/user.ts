import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import {AppDataSource} from '../../../dist/data-source';
import {initializeAppDataSource} from '../../../src/lib/initializeAppDataSource';
import {BlogSystemUser} from '../../../dist/entity/BlogSystemUser';
import md5 from 'md5';

const User: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let {username, password, passwordForConfirm} = req.body;
  username = username.trim();

  let {manager} = AppDataSource;
  let user = new BlogSystemUser();
  user.username = username;
  user.password = password;
  user.password_for_confirm = passwordForConfirm;
  console.log("++++++++++++++++++++");
  let validateRes = await user.validate();
  console.log("===========");
  res.setHeader('content-type', 'application/json; charset=utf-8')

  if(validateRes){
    res.statusCode = 422;
    res.write(validateRes)
  } else {

    user.generatePasswordDigest()

    await initializeAppDataSource()

    await manager.save('BlogSystemUser', user)
    console.log(123123123);
    res.statusCode = 200;
    res.write('注册成功');
  }
  res.end();
};

export default User;
