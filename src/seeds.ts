import {AppDataSource} from './data-source';
import {BlogSystemUser} from './entity/BlogSystemUser';
import {Blog} from './entity/Blog';
import {Comment} from './entity/Comment';

AppDataSource.initialize().then(async (dataSource) => {
  const {manager} = dataSource;

  const user = new BlogSystemUser();
  user.username = 'author' + Date.now().toString();
  user.password_digest = 'test';
  await manager.save(BlogSystemUser, user);

  const blog = new Blog();
  blog.title = 'title' + Date.now().toString();
  blog.content = 'content' + Date.now().toString();
  blog.author = user;
  await manager.save(Blog, blog);

  const commentUser = new BlogSystemUser();
  commentUser.username = 'commenter' + Date.now().toString();
  commentUser.password_digest = 'test';
  await manager.save(BlogSystemUser, commentUser);

  const comment = new Comment();
  comment.user = commentUser;
  comment.content = 'comment';
  comment.blog = blog;
  await manager.save(Comment, comment);

  await dataSource.destroy();
}).catch(error => console.log(error));

