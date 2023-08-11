import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props){

    const [entry, setEntry] = useState({
        title:"",
        content:""
    });

    const [expand, setExpand] = useState(false);

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

    function handleClick(){
        setExpand(!expand);
    }

    return (
        <div>
            <form className="create-note">
                { expand && <input onChange={handleChange} value={entry.title} name="title" placeholder="Title..."/>}
                <textarea onClick={handleClick} rows={expand ? "3" : "1"} onChange={handleChange} value={entry.content} name="content" placeholder="Take a note..."/>
                <Zoom in={expand}>
                    <Fab onClick={handleAdd}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;