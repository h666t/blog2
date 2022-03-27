import { AppDataSource } from "./data-source"
import {Blog} from "./entity/Blog"
AppDataSource.initialize().then(async ({manager}) => {

    let blog = new Blog()

    blog.title = 'title'
    blog.content = "content"
    await manager.save(Blog, blog)
    let blogsList = await manager.find(Blog)
    console.log(blogsList);

    // await AppDataSource.destroy()

}).catch(error => console.log(error))

