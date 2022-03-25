import {AppDataSource} from './data-source';
import {Blogs} from './entity/blogs';

AppDataSource.initialize().then(async ({manager}) => {

  let currentBlogList = await manager.find(Blogs);

  if (currentBlogList.length > 0) {
    console.log('有数据');
  } else {
    await manager.save([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
      return new Blogs({
        title: `第${item}篇文章`,
        content: `我是第${item}篇文章`,
        delete_date: null
      });
    }));

    let blogsList = await manager.find(Blogs);
    console.log('填充完毕');
    console.log(blogsList);
  }

  await AppDataSource.destroy();

}).catch(error => console.log(error));

