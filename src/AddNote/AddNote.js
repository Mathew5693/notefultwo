import React from 'react'
import ApiContext from '../ApiContext'

export default class AddNote extends React.Component {

    static contextType = ApiContext;

    handleSubmit = (event) => {
        event.preventDefault();
        const getNote =  event.target.note.value;
        const theFolder = event.target.getFolder.value;
        this.context.addNote(getNote, theFolder);
        
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
                        Folder Note:
                        <input type="text" name="note" />
                    </label>
                        <button type="Submit">Add Note</button>
                </form>          
           </div>
        )
    }
}