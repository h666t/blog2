import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import {AppDataSource} from '../../../src/data-source';
import {BlogSystemUser} from '../../../src/entity/BlogSystemUser';
import {initializeAppDataSource} from '../../../lib/initializeAppDataSource';

const User: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let {username, password, passwordForConfirm} = req.body;
  username = username.trim();
  // console.log(AppDataSource.isInitialized);
  // await initializeAppDataSource()
  // console.log(AppDataSource.isInitialized);
  // await AppDataSource.initialize();
  await initializeAppDataSource()
  let {manager} = AppDataSource;
  let user = new BlogSystemUser();
  user.username = username;
  user.password = password;
  user.password_for_confirm = passwordForConfirm;
  let validateRes = await user.validate();
  res.setHeader('content-type', 'application/json; charset=utf-8');

  if (validateRes) {
    res.statusCode = 422;
    res.write(validateRes);
  } else {

    user.generatePasswordDigest();

    await manager.save('BlogSystemUser', user);
    console.log(123123123);
    res.statusCode = 200;
    res.write('注册成功');
  }
  res.end();
};

export default User;
