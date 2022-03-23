import Link from "next/link"
import {useCallback, useEffect, useMemo, useState} from "react"
import Screen from "./screen"

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

  return (
    <>
      <button onClick={addN}>n+1</button>
      <button onClick={addM}>m+1</button>
      <Screen add={addN}></Screen>
      {/*<Screen ></Screen>*/}
      <Link href="/"><a>返回首页</a></Link>
    </>
  )
}
