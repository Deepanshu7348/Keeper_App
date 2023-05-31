import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import CreateArea from './CreateArea'
import { useState } from 'react'

function App() {

  const [notes,setnotes]=useState([]);
  function addNote(newNote){
    setnotes((prevNotes)=>{
      return [...prevNotes,newNote]
    });
  }
  return (
    <>
    <Header/>
    <CreateArea 
      onAdd={addNote}
    />
    {notes.map((noteItem,index)=>{
      return(
        <Note
          key={1}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
        />
      );    
    })}
    <Footer/>

    </>
  )
}
export default App;
