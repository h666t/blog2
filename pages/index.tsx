import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {GetServerSideProps} from 'next';
import {AppDataSource} from '../src/data-source';
import style from "./Home.module.css"
import axios from 'axios';
import {Blog} from '../src/entity/Blog';
import {withSessionSsr} from './lib/withSession';
import {BlogSystemUser} from '../src/entity/BlogSystemUser';
type Props = {
  blogs: Blog[],
  isSignIn: boolean,
  user: BlogSystemUser | undefined,
}

export default function Home(props: Props) {
  return (
    <div className={style.container}>
      {props.isSignIn ?
        <div>你好，{props.user ? props.user.username : ''}</div> :
        <div>未登录</div>
      }
      <Link href={'/sign_up'}><a>注册</a></Link>
      <Link href={'/sign_in'}><a>登录</a></Link>
      {props.blogs.map((blog) => {
        return <div key={blog.id}>
          <Link href={`/blogs/${blog.id}`}>
            <a>
              <div>id: {blog.id}</div>
              <div>title: {blog.title}</div>
            </a>
          </Link>
          <br/>
        </div>;
      })}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = withSessionSsr(async ({req}) => {
  const user = req.session.user;
  if(!AppDataSource.isInitialized){
    await AppDataSource.initialize()
  }
  let {manager} = AppDataSource
  let blogs = await manager.find(Blog)
  return {
    props : {
      isSignIn: !!user,
      user: user || undefined,
      blogs: JSON.parse(JSON.stringify(blogs))
    }
  }
});
