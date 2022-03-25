import { AppDataSource } from "./data-source"
import {Blogs} from "./entity/blogs"
AppDataSource.initialize().then(async ({manager}) => {

    let blog = new Blogs()

    blog.title = 'title'
    blog.content = "content"
    await manager.save(Blogs, blog)
    let blogsList = await manager.find(Blogs)
    console.log(blogsList);

    await AppDataSource.destroy()

}).catch(error => console.log(error))

