import React from 'react'
import classes from './MyInput.module.css'


function myInput({children, ...props}) {
  return (
      <div className={classes.MyDiv}>
        <textarea {...props} className={classes.MyIpt}
        >{children}
        </textarea>
        <button onClick={props.add}>{props.name}</button>
      </div>

    
  )
}

export default myInput