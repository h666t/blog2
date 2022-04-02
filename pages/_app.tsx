import '../styles/globals.css'
import Head from "next/head"
import {AppProps} from 'next/app';
import "reflect-metadata"

export default function MyApp ({Component, pageProps}: AppProps) {
  return (<>
    <Head>
      <title>head</title>
    </Head>
    <Component {...pageProps} />
  </>)
}
