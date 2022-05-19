import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from "next";
import {BlogSystemUser} from '../../src/entity/BlogSystemUser';

const sessionOptions = {
  cookieName: "my_blog",
  password: "0f2d510f-1470-463f-bdfc-7db591ff1b32",
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
  return withIronSessionSsr(handler, sessionOptions);
}

declare module "iron-session" {
  interface IronSessionData {
    user?: BlogSystemUser;
  }
}
