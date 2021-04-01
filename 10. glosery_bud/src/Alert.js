import React, { useEffect } from 'react'

const Alert = ({removeAlert,msg,type}) => {

  useEffect(()=> {
    const timeOut = setTimeout(() => {
      removeAlert()
    }, 3000);
    return ()=> clearTimeout(timeOut)
   },[])
  return <article>
    <p className= {`alert alert-${type}`}>{msg}</p>
  </article>
}

export default Alert
