import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import {AppDataSource} from '../../../src/data-source';
import {initializeAppDataSource} from '../../../src/lib/initializeAppDataSource';
import {withIronSessionApiRoute} from 'iron-session/next';
import {BlogSystemUser} from '../../../src/entity/BlogSystemUser';
import md5 from 'md5';
import {withSessionRoute} from '../../../lib/withSession';

const Sessions: NextApiHandler = withSessionRoute(async (req, res) => {
  let {username, password} = req.body;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  await initializeAppDataSource();
  let {manager} = AppDataSource;
  let existUser = await manager.findBy(BlogSystemUser, {
    username
  });
  if(existUser && existUser[0] && existUser[0].password_digest === md5(password.trim())){
    req.session.user = existUser[0]
    await req.session.save()
    // await req.session.save();
    res.status(200)
    // console.log(JSON.stringify(existUser[0]));
    res.end(JSON.stringify(existUser[0]));
  } else {
    res.status(400);
    res.end()
  }
});

export default Sessions;
