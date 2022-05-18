import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import {AppDataSource} from '../../../src/data-source';
import {BlogSystemUser} from '../../../src/entity/BlogSystemUser';
import {initializeAppDataSource} from '../../../src/lib/initializeAppDataSource';

const Sessions: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let {username, password} = req.body;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  // await AppDataSource.initialize();
  console.log(AppDataSource.isInitialized);
  await initializeAppDataSource()
  // await initializeAppDataSource()
  console.log(AppDataSource.isInitialized);
  let {manager} = AppDataSource;
  let existUser = await manager.findBy('BlogSystemUser', {
    username
  });
  res.status(200);
  // if(existUser){
  //   if(existUser.password_digest){}
  // }
  res.end();
};

export default Sessions;
