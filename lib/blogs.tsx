import path from 'path';
import fs,{promises as fsPromise} from 'fs';
import matter from 'gray-matter';

const getPosts = async () => {
  const markdownDir = path.join(process.cwd(), 'markdown');
  let markdownList = await fsPromise.readdir(markdownDir);
  return markdownList.map((item, index)=>{
    let blogPath = path.join(markdownDir, item);
    let fileContent = fs.readFileSync(blogPath, 'utf-8');
    let {content, data: {title, date}} = matter(fileContent)
    return {id: index, content, title, date}
  })
};

export default getPosts;
