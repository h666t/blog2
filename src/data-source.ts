import "reflect-metadata"
import { DataSource } from "typeorm"
import {initializeAppDataSource} from '../lib/initializeAppDataSource';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "blog_development",
    synchronize: false,
    logging: true,
    entities: ['dist/entity/**/*.js'],
    migrations: ['dist/migration/**/*.js'],
    subscribers: ['dist/subscribers/**/*.js'],
});
