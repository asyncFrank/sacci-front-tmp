import React from 'react'
import {useStateContext} from '../contexts/ContextProvider'
function MockComponent() {

    const [activeMenu,setActiveMenu] = useStateContext();
    const handleClose(){
        
    }
  return (
    <div>MockComponent</div>
  )
}

export default MockComponent