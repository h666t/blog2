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
   <br/>用于解决白屏、seo问题、所有用户请求结果都一样，把php提前渲染成html
3. 服务端渲染（SSR）
   <br/>用于解决白屏、seo问题、不同用户请求结果不一样,php py ruby java 的基本功能
