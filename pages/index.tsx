import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {GetServerSideProps} from 'next';
import {AppDataSource} from '../src/data-source';
import {initializeAppDataSource} from '../lib/initializeAppDataSource';

type Props = {
  blogs: Blog[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  await initializeAppDataSource();
  const {manager} = AppDataSource;
  let blogs = await manager.find('blog');
  console.log(blogs);
  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs))
    }
  };
};

export default function Home(props: Props) {
  return (
    <>
      <Link href={'/sign_up'}><a>注册</a></Link>
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
    </>
  );
}
