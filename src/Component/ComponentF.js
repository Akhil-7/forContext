import React,{useContext} from 'react'
import {UserContext,ChannelContext} from '../App'

function ComponentF() {

  const name=useContext(UserContext);
  const place1=useContext(ChannelContext);

  return (
    <div>{name}-{place1}</div>
  )
}

export default ComponentF
