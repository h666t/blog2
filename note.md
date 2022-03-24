nextjs == react + node

# Link
````
<Link href="/"> <a>link</a> </Link>
````

# Head

````
 <Head>
    <title>title</title>
    <meta />
 </Head>
````

# _app.js
react的根节点，可全局配置Head等

# 局部css
````jsx
export default function Demo(){
  return (<>
    <div>haha</div>
    
    <style jsx>{`
      div{
        color: red;
      }
    `}</style>
  </>)
}
````

# typescript
````
    yarn global add typescript
    tsc --init
    yarn add @types/node 
    yarn add @types/react
    yarn add @types/react-dom
````
# 渲染方式
1. 客户端渲染
   <br/>例如 react vue,用js生成html
2. 静态页面生成（SSG）
   1. 用于解决白屏、seo问题、所有用户请求结果都一样，把php提前渲染成html
   2. 动内容由服务器渲染好，直接给客户端，省去客户端的渲染 =》 动态内容静态化,
   通过GetStaticProps将将服务端数据挂载到prop上。此时页面已经被完全静态化了，build的时候就完成静态化了，
   

````tsx
import {GetStaticProps, NextPage} from 'next';
import {useBlogs} from '../../hooks/useBlogs';
import getPosts from '../../lib/blogs';

type Props = {
  blogsList: Blog[];
}

const BlogIndex:NextPage<Props> = (props) =>{
  console.log(props);
  const {blogsList} = props;
  return <>
    return (<>
    {blogsList.map((blog) => <div key={blog.id}>
      <div>id: {blog.id}</div>
      <div>content: {blog.content}</div>
      <div>date: {blog.date}</div>
      <div>title: {blog.title}</div>
    </div>)}
  </>);
  </>
}

export default BlogIndex

export const getStaticProps: GetStaticProps = async  () => {
  const blogsList = JSON.parse(JSON.stringify(await getPosts()));
  return {
    props: {
      blogsList
    }
  }
}
````

3. 服务端渲染（SSR）
   1. 用于解决白屏、seo问题、不同用户请求结果不一样,php py ruby java 的基本功能
   2. Next中的静态内容 后端会渲染一次，前端在渲染一次，前端渲染的时候会把事件监听等内容绑定上去
   3. js的动态内容是由客户端渲染的,由于getServerSideProps只能获取到请求和响应，所以无法获得类似窗口大小等信息
````tsx
import {GetServerSideProps, NextPage} from 'next';
import {UAParser} from 'ua-parser-js';

type Props = {
  userAgent: UAParser.IBrowser
}

const DemoIndex:NextPage<Props> = (props) => {
  console.log(props);
  return <>
    你的浏览器是{props.userAgent.name}
  </>
}

export default DemoIndex

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      userAgent: new UAParser(context.req.headers['user-agent']).getBrowser()
    }
  }
}
````

# 路由

例如
````tsx
   <Link href={`/xxx/${xxx.id}}`> <a>click me</a> </Link>
````
创建一个 [id].tsx 文件

## ssg路由
ssg路由必须穷举所有可能的路径，用于生成静态页面
````tsx
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {getBlogDetail, getBlogIDList} from '../../lib/blogs';

type Props = {
  blogDetail: Blog
}

const BlogDetail: NextPage<Props> = (props) => {
  return <>
    <h1>{props.blogDetail.title}</h1>
    <br/>
    <article>
      {props.blogDetail.content}
    </article>
  </>;
};

export default BlogDetail;

export const getStaticPaths: GetStaticPaths = async (context) => {
  let blogIDList = await getBlogIDList();
  return {
    paths: blogIDList.map((item)=>{
      return {
        params: {id: item}
      }
    }),
    fallback: false
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  let blogDetail = await getBlogDetail(context.params ? context.params.id : '')
  return {
    props: {
      id: context && context.params ? context.params.id : "",
      blogDetail
    }
  };
};

````

