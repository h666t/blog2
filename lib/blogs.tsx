import path from 'path';
import fs, {promises as fsPromise} from 'fs';
import matter from 'gray-matter';

const markdownDir = path.join(process.cwd(), 'markdown');

export const getBlogList = async () => {
  let markdownList = await fsPromise.readdir(markdownDir);
  return markdownList.map((item, index) => {
    let blogPath = path.join(markdownDir, item);
    let fileContent = fs.readFileSync(blogPath, 'utf-8');
    let {content, data: {title, date}} = matter(fileContent);
    return {id: item.split('.')[0], content, title, date};
  });
};

export const getBlogDetail = async (id: string | string[] | undefined) => {
  if(!id){
    return
  }
  let blogPath = path.join(markdownDir, `${id}.md`);
  let fileContent = fs.readFileSync(blogPath, 'utf-8');
  let {content, data: {title, date}} = matter(fileContent);
  return JSON.parse(JSON.stringify({id: id, content, title, date}));
};

export const getBlogIDList = async () => {
  let blogDirList = await fsPromise.readdir(markdownDir);
  return blogDirList.map((item: string) => {
    return item.split('.')[0];
  });
};
