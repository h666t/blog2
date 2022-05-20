import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from "next";
import {BlogSystemUser} from '../src/entity/BlogSystemUser';

const sessionOptions = {
  cookieName: "my_blog",
  password: process.env.SECRET as string,
  cookieOptions: {
    secure: false,
  },
};

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
export function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown },
  >(
  handler: (
    context: GetServerSidePropsContext,
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
) {
  console.log(sessionOptions);
  return withIronSessionSsr(handler, sessionOptions);
}

declare module "iron-session" {
  interface IronSessionData {
    user?: BlogSystemUser;
  }
}
