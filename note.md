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

# _app.tsx
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

# postgres
````bash
docker pull postgres
docker run --name mypostgres -e POSTGRES_HOST_AUTH_METHOD=trust -p 5432:5432 -d postgres
docker exec -it 容器id bash
psql -U postgres
\l 表示list
\c 数据库名字 表示链接某一个数据库
\dt 表示展示所有表（display table）
create databse blog; 表示创建blog数据库
````

# typeorm
````bash
根据typeorm文档安装依赖

提交代码，typeorm会覆盖你的gitignore和package.json，tsconfig.json 初始化完要返回回去
npx typeorm init --database postgres 初始化typeorm
git checkout HEAD -- .gitignore
git checkout HEAD -- package.json
git checkout HEAD -- tsconfig.json

修改数据库配置 src/data-source.ts

````

注意：typeorm使用的是tsnode编译ts，nextjs用的是babel，使用我们需要使用babel 编译 typeorm

> https://dev.to/unframework/getting-typeorm-to-work-with-next-js-and-typescript-1len

安装
"@babel/cli": "^7.17.6",
"@babel/core": "^7.0.0-0",
"@babel/plugin-proposal-decorators": "^7.17.8",
"babel-plugin-transform-typescript-metadata": "^0.3.2",

自定义 .babelrc 文件
````json
{
  "presets": [
    [
      "next/babel",
      {
        "class-properties": {
          "loose": true
        }
      }
    ]
  ],
  "plugins": [
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]
}
````
运行 npx babel ./src --out-dir dist --extensions ".ts,.tsx" 编译ts

* 把同步功能禁用

# 创建表
通过 migrations ，它可以帮助你进行修改数据库字段等操作，而不用担心数据丢失
通过 https://typeorm.io/migrations 创建表

# 部署
```bash
yarn build
yarn start
#docker化
#https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
#FROM node:16
#
## Create app directory
#WORKDIR /usr/src/app
#
## Install app dependencies
## A wildcard is used to ensure both package.json AND package-lock.json are copied
## where available (npm@5+)
#COPY package*.json ./
#
#RUN npm install
## If you are building your code for production
## RUN npm ci --only=production
#
## Bundle app source
#COPY . .
#
#EXPOSE 8080
#CMD [ "node", "server.js" ]

# 创建dockerignore
# 忽略 文件
#node_modules
#*.log

#本地创建
#docker build . -t huang/node-web-app

# 把镜像跑起来
#docker run -p 3000:3000 -d huang/node-web-app

#有问题的话 看docker日志
# docker logs <dockerid>
#由于跑在两个容器里，所以可能连不上数据库
```
链接服务器 ssh
用root安装docker 百度一下
将要用到的非root用户添加到docker分组
在用户目录拉取代码到app目录

创建一个和app同级的目录，用于存放数据库数据
安装postgres
安装node，
在app中的代码里创建docker镜像,跑起来，

此时可以curl http://localhost:3000

可能会遇到无法访问数据库的问题
将容器删掉，重新跑，添加 --network=host 
可能还是有问题，因为没有.env.local文件，touch一个

阿里云 配置安全组，允许访问3000端口

# nginx
1. 静态文件走nginx，快
2. 可以起多个node，无缝重启
