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
   例如 react vue
2. 静态页面生成（SSG）
   用于解决白屏、seo问题、所有用户请求结果都一样
3. 服务端渲染（SSR）
   用于解决白屏、seo问题、不同用户请求结果不一样
