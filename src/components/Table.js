import React from 'react'


function Table({note,remove,edit}) {
  return (
    <div>
      <table>
        <thead>
          <tr className='names'>
            <td>Имя</td>
            <td>Фамилия</td>
            <td>Возраст</td>
            <td>Зарплата</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
        {note.map((note) => 
        <tr>
          <td>{note.firstname}</td>
          <td>{note.lastname}</td>
          <td>{note.age}</td>
          <td>{note.salary}</td>
          <td style={{width :'100px'}} onClick={()=> edit(note)} ><button>Edit</button></td>
          <td style={{width :'100px'}} onClick={()=> remove(note)}><button>Delete</button></td>
        </tr>
        )}
        </tbody>
      </table>      
    </div>
  )
}

export default Table