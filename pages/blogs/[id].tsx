import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import {getBlogDetail, getBlogIDList} from '../../lib/blogs';

type Props = {
  blogDetail: Blog
}

const BlogDetail: NextPage<Props> = (props) => {
  return <>
    <h1>{props.blogDetail.title}</h1>
    <br/>
    这里会被注入
    <article dangerouslySetInnerHTML={{__html: props.blogDetail.htmlContent}}>
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
