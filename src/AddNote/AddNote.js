import React from 'react'
import ApiContext from '../ApiContext'



export default class AddNote extends React.Component {

    static contextType = ApiContext;

    
    
    handleSubmit = (event) => {
        event.preventDefault();
        const getNote =  event.target.note.value;
        const theFolder = event.target.getFolder.value;
        const noteName = event.target.noteName.value;
        const theTime = new Date().toLocaleString();

        if(noteName === ""){
            alert("Note Name is Required!")
        } else{
            this.context.addNote(noteName, theFolder, getNote, theTime);
            this.props.history.push('/');
        }
        
        
    }

    render(){

        let selectFolder = this.context.folders;
        let folderList = selectFolder.map((item, i) => {
            return (
                <option key={i} value={item.id}>{item.name}</option> 
            )
        })

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <select name="getFolder">{folderList}</select>
                    <label>
                        Name:
                        <input type="text" name="noteName" />
                    </label>
                    <label>
                        Note:
                        <input type="text" name="note" />
                    </label>
                        <button type="Submit">Add Note</button>
                </form>
            
           </div>
        )
    }
}