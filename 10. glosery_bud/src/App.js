import React, { useState, useEffect,useRef } from 'react'
import List from './List'
import Alert from './Alert'


const getLocalStorage = ()=> {
  
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}
function App() {
  const inputRef = useRef(null)
  const [name,setName] = useState('')
  const [list,setList] = useState(getLocalStorage)
  const [isEditing,setIsEditing] = useState(false);
  const [editId,setEditId] = useState(null)

  const [alert,setAlert] = useState({
    show: false,
    msg:'',
    type:''
  })
  const showAlert = (show= false, type='',msg='')=> {
    setAlert({show,type,msg})
  }
  const clearList = (show=true,type="danger",msg="List is made empty")=> {
    setAlert({show,type,msg})
    setList([])
  }



  const handleSubmit = (e)=> {
    e.preventDefault()
    if(!name) {
      showAlert(true,'danger','Please enter some value');
    }
    else if(name && isEditing) {
      // deal with editing 
      setList(      
        list.map((item)=> {
        if(item.id === editId) {
          return {...item,title:name}
        }
        return item
      }))

      setName('')
      setEditId(null);
      setIsEditing(false)
     
    }
    else {
      showAlert(true,'success',`${name} is added to the list`)
      let newItem = {id: new Date().getTime().toString(),
      title:name}
      setList([...list, newItem])
      setName('')
    }

  }
  const deleteItem = (id,title)=> {
    showAlert(true,'danger',`'${title}' item is removed`)
    let newList = list.filter((item)=> item.id!==id )
    setList(newList)
  }
  // const editItem = (id,title)=> {
  //   setIsEditing(true)
  //   setEditId(id)
  //   setName(title)

  // }
  const editItem = (id)=> {
    const specificId = list.find((item)=> item.id === id)
    setEditId(specificId.id)
    setIsEditing(true)
    setName(specificId.title)
  }
  useEffect(()=> {
    localStorage.setItem("list",JSON.stringify(list))
   },[list])
   useEffect(()=> {
    inputRef.current.focus()
   },[isEditing])

 
  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert  {...alert} removeAlert={showAlert} />}
      <h3>The Movies House</h3>
      <div className="form-control">
        <input type='text' className='grocery' placeholder='e.g. Mr Nobody' value={name} onChange={(e)=> setName(e.target.value)} ref= {inputRef} />
        <button type='submit' className='submit-btn'> {isEditing? 'Edit Movie': 'Add Movie'} </button>
      </div>
    </form>
    {(list.length >0) &&  
    <div className="grocery-container">
      <List items={list} deleteItem={deleteItem} editItem={editItem} />
      <button className="clear-btn"onClick={clearList} >clear Movies</button>
    </div>
}
  </section>
}

export default App
