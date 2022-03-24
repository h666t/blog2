import Link from "next/link"
import {createRef, useCallback, useEffect, useMemo, useRef, useState} from "react"
import Screen from "./screen"
import demoPng from "../../assets/images/demo.jpg"
import Image from "next/image"
import nn from "../../assets/images/n.svg"

console.log(demoPng)
// console.log('执行了')
export default function FirstBlog (){
  // useEffect(()=>{
  //   console.log('执行了useEffect')
  // },[])
  const [n,setN] = useState(1)
  const [m,setM] = useState(1)
  // const add = useCallback(()=>{
  //     return setN((i)=>{return i.n+1})
  // },[])
  useMemo(()=>{
    return n
  },[n])

  // useMemo(()=>{
  //   return m
  // }, [m])

  // const addN = ()=>{
  //   setN((i)=>{return i+1})
  // }
  const addM = ()=>{
    setM((i)=>{return i+1})
  }

  const addN = useCallback(()=>{
    setN((i)=>{return i+1})
  },[setN])

  const ref = useRef()
  const showRef= ()=>{
    console.log(ref)
  }
  return (
    <>
      <button onClick={addN}>n+1</button>
      <button onClick={addM}>m+1</button>
      <Screen ref={ref} ></Screen>
      <button onClick={showRef}>ref</button>
      {/*<Screen ></Screen>*/}
      <Link href="/"><a>返回首页</a></Link>
      {/*<img src={nn.src} />*/}
      <Image src={nn.src} width="100%" height="100%" alt=""/>
    </>
  )
}
