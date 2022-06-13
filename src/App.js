import React, {useState} from 'react';
import './styles/App.css'
import Table from './components/Table';
import MyInput from './components/UI/MyInput/MyInput';
import MyModal from './components/UI/MyModal/MyModal';

function App() {
  const [note, setNotes] =  useState([
    {id:'1',firstname: 'Евгений', lastname: 'Господинов', age: '22', salary: '100'},
    {id:'2',firstname: 'Виктор', lastname: 'Господинов', age: '50', salary: '100'}
  ]);
  const [editValue, setEditValue] = useState('')
  const [visible,setVisible] = useState(false)

  const postponeTextarea = () => {
    setInputValue(JSON.stringify(note))
  }

  const showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      let inputNotes = JSON.parse(text)
      let newArr = [...note]
      inputNotes.map (n => {
        let newn = { id: newArr.length + 1,...n}
        newArr.push(newn)
      })
      setNotes(newArr)
    };
    reader.readAsText(e.target.files[0])
  }

  const editNote = (no) =>{ 
    setEditValue(JSON.stringify(note[no.id-1]));
    setVisible(true)
  }

  const removeNote = (no) =>{ 
    setNotes(note.filter( n=> n.id !== no.id))
  }
  const [inputValue, setInputValue] = useState(JSON.stringify([{"firstname":"Tomas","lastname":"Shelby","age":"33","salary":"500"},{"firstname":"Valeiy","lastname":"Zhmishenko","age":"54","salary":"322"}] ))

  const addNote = () => {
    let inputNotes = JSON.parse(inputValue)
    let newArr = [...note]
    inputNotes.map (n => {
      let newn = { id: newArr.length + 1,...n}
      newArr.push(newn)
    })
    setNotes(newArr)

  }

  const submitEditedNote = () => {
    let editId = JSON.parse(editValue).id;
    let newArr = [...note]
    newArr.map( (n,i) => {
      if (n.id == editId ){
        newArr[i] = JSON.parse(editValue)
      }     
    })
    setVisible(false)
    setNotes(newArr)
  }
  return (
      <div className='App'>
        <div className='input-container'>
          <label class="custom-file-upload">
            <input type="file" onChange={showFile}/>
              Отркыть файл
          </label>   
          <MyInput name = 'Добавить' onChange = {(e) => setInputValue(e.target.value)} add = {addNote} value = {inputValue}></MyInput> 
        </div>
        <button className='button' onClick={postponeTextarea} >Перенести в textarea</button>
        <Table note = {note} remove = {removeNote} edit = {editNote}/>
        <MyModal visible={visible} setVisible = {setVisible}>
          <MyInput name = 'EDIT' value = {editValue} onChange = {(e) => setEditValue(e.target.value)} add = {submitEditedNote}/>
        </MyModal>
      </div>
  );
}

export default App;
