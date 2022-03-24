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
