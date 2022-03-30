import { AppDataSource } from "./data-source"
import {Blog} from "./entity/Blog"
import {BlogSystemUser} from './entity/BlogSystemUser';
// import {initializeAppDataSource} from '../lib/initializeAppDataSource';
AppDataSource.initialize().then(async ({manager}) => {

  console.log(BlogSystemUser);
  console.log('init');

}).catch(error => console.log(error))



