import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setNotes] = useState([]);

    console.log(notes);
    console.log(typeof variable);

    function onAdd(entry){
        setNotes( (prevEntry) => {
            return [...prevEntry,entry]
        });
    }

    function handleDelete(id){
        setNotes( prevNotes => {
            return prevNotes.filter( (note, index) =>{
                return index !== id;
            })
        });
    }

    return (
    <div>
        <Header />
        <CreateArea add={onAdd}/>

        {
            notes.map((note, index) => {
            return (
            <Note 
                key = {index}
                id = {index}
                title = {note.title}
                content = {note.content}
                delete = {handleDelete}
            />);
        })}
        <Footer />
    </div> 
    );
}; 

export default App;