import "reflect-metadata"
import { DataSource } from "typeorm"
import {initializeAppDataSource} from '../lib/initializeAppDataSource';
import {Blog} from './entity/Blog';
import {BlogSystemUser} from './entity/BlogSystemUser';
import {Comment} from './entity/Comment';

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "blog_development",
    synchronize: false,
    logging: true,
    entities: [Blog, BlogSystemUser, Comment],
    migrations: ['dist/migration/**/*.js'],
    subscribers: ['dist/subscribers/**/*.js']
});

if(!AppDataSource.isInitialized){
  AppDataSource.initialize()
    .then(() => {
    })
    .catch((err) => {
      console.log("Error during Data Source initialization", err)
    })
}
export {AppDataSource}
