import React, {useState} from "react";

function CreateArea(props){

    const [entry, setEntry] = useState({
        title:"",
        content:""
    });

    function handleChange(event){

        const {name, value} = event.target;

        setEntry((prevEntry) =>{
            return{
                ...prevEntry,
                [name]: value
            }
        });
    }

    function handleAdd(event){
        event.preventDefault();
        props.add(entry);
        setEntry({title:"", content: ""});
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} value={entry.title} name="title" placeholder="Title..."/>
                <textarea onChange={handleChange} value={entry.content} name="content" placeholder="Take a note..."/>
                <button onClick={handleAdd}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;