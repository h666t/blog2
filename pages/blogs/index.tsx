import {GetStaticProps, NextPage} from 'next';
import {useBlogs} from '../../hooks/useBlogs';
import getPosts from '../../lib/blogs';

type Props = {
  blogsList: Blog[];
}

const BlogIndex: NextPage<Props> = (props) => {
  console.log(props);

  const {blogsList} = props;
  return <>
    {blogsList.map((blog) => <div key={blog.id}>
      <div>id: {blog.id}</div>
      <div>content: {blog.content}</div>
      <div>date: {blog.date}</div>
      <div>title: {blog.title}</div>
    </div>)}
  </>;
};

export default BlogIndex;

export const getStaticProps: GetStaticProps = async () => {
  const blogsList = JSON.parse(JSON.stringify(await getPosts()));
  return {
    props: {
      blogsList
    }
  };
};
