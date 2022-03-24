import React, {forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useState} from "react"

const Screen = forwardRef( function X (props, ref){
  useImperativeHandle(ref, ()=>{
    return {
      haha: ()=>{
        console.log('haha')
      }
    }
  })
  // let [x, setX] = useState(0)
  console.log('update')
  // console.log(props.add)
  return <>
    <div>test</div>
    children
    {/*{props.n}*/}
    <style jsx>{`
      div{
        color: red;
      }
    `}</style>
  </>
})


export default Screen

