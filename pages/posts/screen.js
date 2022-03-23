import React, {memo, useCallback, useEffect, useMemo, useState} from "react"

function  _screen (props){

  // let [x, setX] = useState(0)
  console.log('update')
  // console.log(props.add)
  return <>
    children
    {/*{props.n}*/}
  </>
}

const Screen = memo(_screen)

export default Screen

