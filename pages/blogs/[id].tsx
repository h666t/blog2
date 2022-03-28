import {GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {initializeAppDataSource} from '../../lib/initializeAppDataSource';
import {AppDataSource} from '../../src/data-source';
import {PreviewData} from 'next/types';

type Props = {
  blogDetail: Blog
}

export const getServerSideProps: GetServerSideProps<{ [key: string]: any },{id: string}, PreviewData> = async (context) => {
  let id = context.params ? context.params.id : '';
  await initializeAppDataSource();
  let {manager} = AppDataSource;
  let blogDetail = await manager.findOneBy('blog', {id: id});
  return {
    props: {
      blogDetail: JSON.parse(JSON.stringify(blogDetail))
    }
  };
};

const BlogDetail: NextPage<Props> = (props) => {
  console.log(props);
  return <>
    <h1>{props.blogDetail.title}</h1>
    <br/>
    这里会被注入
    <br/>
    内容：
    <article dangerouslySetInnerHTML={{__html: props.blogDetail.content}}>
    </article>
  </>;
};

export default BlogDetail;

