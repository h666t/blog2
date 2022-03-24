import {GetStaticProps, NextPage} from 'next';
import {useBlogs} from '../../hooks/useBlogs';
import {getBlogList} from '../../lib/blogs';
import Link from 'next/link';

type Props = {
  blogsList: Blog[];
}

const BlogIndex: NextPage<Props> = (props) => {
  console.log(props);

  const {blogsList} = props;
  return <>
    {blogsList.map((blog) => <div key={blog.id}>
      <Link href={`/blogs/${blog.id}`}><a>{blog.id}</a></Link>
    </div>)}
  </>;
};

export default BlogIndex;

export const getStaticProps: GetStaticProps = async () => {
  const blogsList = JSON.parse(JSON.stringify(await getBlogList()));
  return {
    props: {
      blogsList
    }
  };
};
