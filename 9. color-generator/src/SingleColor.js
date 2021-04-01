import React, { useState, useEffect } from 'react'


const SingleColor = ({rgb,weight,index,hexColor}) => {
  const [alert,setAlert] = useState(false);
  const valueWithHash = `#${hexColor}`

  useEffect(()=> {
    const timeOut = setTimeout(()=> {
      setAlert(false);
    },3000)
    return () => clearTimeout(timeOut)
  },[alert])

  const bcg = rgb.join(',')
  console.log(bcg)
  return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={()=> {
    setAlert(true);
    navigator.clipboard.writeText(valueWithHash);
  }} >
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{valueWithHash}</p>
    {alert && <p className='alert'> copied to clipboard</p>}

  </article>
}

export default SingleColor
