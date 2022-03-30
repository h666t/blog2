import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import {AppDataSource} from '../../../src/data-source';
import {initializeAppDataSource} from '../../../lib/initializeAppDataSource';
import {BlogSystemUser} from '../../../dist/entity/BlogSystemUser';
import md5 from 'md5';

const User: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let {name, password, passwordForConfirm} = req.body;
  let error = "";
  name = name.trim();
  if (!name) {
    error = "用户名为空"
  }else if(!password){
    error = "密码为空"
  }else if(!passwordForConfirm){
    error = "确认密码为空"
  } else if(name.length > 100){
    error = "用户名太长，超过100个字"
  } else if (password !== passwordForConfirm){
    error = "两次密码不一致"
  } else if (password.length > 100){
    error = "密码太长，超过100个字"
  }
  if (password !== passwordForConfirm) {
    error = '密码不一致';
  }

  await initializeAppDataSource();
  let {manager} = AppDataSource
  if(!error){
    let existUser = await manager.findBy('BlogSystemUser', {username: name});
    if(existUser && existUser.length > 0){
      error = "用户名已存在"
    }
  }

  res.setHeader('content-type', 'application/json; charset=utf-8')
  if(error){
    res.statusCode = 422;
    res.write(error)
  } else {
    let user = new BlogSystemUser()
    user.username = name;
    user.password_digest = md5(password)
    await manager.save('BlogSystemUser', user)
    res.statusCode = 200;
    res.write('注册成功');
  }
  res.end();
};

export default User;
