
import React, {useState} from 'react'
import './App.css';
import {Container, Button, Form, FormInput} from 'shards-react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function App() {
    //Setup our To-Do list
    const [toDoList, setToDoList] = useState([
    ]);
    //Set up our Input-Value/
    const [value, setValue]= useState('');

    //Handle the submit of the form
    const handleSubmit= (e) => {
      e.preventDefault();
      addToDo(value);
      setValue('');
    }
    //Add To-Do
    const addToDo = (text)=> {
     const updatedToDoList= [...toDoList, {text}]
     setToDoList(updatedToDoList);
    }
    //Delete To-Do
    const handleDelete = (item)=>{
      const filteredToDo= toDoList.filter(currentValue=>(currentValue !== item));
      setToDoList(filteredToDo);
    }
    

  return (
    <Container>
      <h1>To Do List</h1>
      <Container className='toDoList' >
        {toDoList.map((item,index)=>(
          <div key={index}>
              <span>{item.text}</span>
              <Button onClick={()=>handleDelete(item)} >Delete</Button>
          </div>
        ))}
      </Container>

      <Container className='toDoInput'>
          <Form onSubmit={handleSubmit}>
            <FormInput
            placeholder='Type to Do Here'
            value={value}
            onChange={e=>setValue(e.target.value)}
            />
            <Button type='submit'>Add-to-do</Button>
          </Form>
      </Container>
    </Container>
  );
}

export default App;
