import React from 'react'
import ApiContext from '../ApiContext'

export default class AddNote extends React.Component {

    static contextType = ApiContext;

    handleSubmit = (event) => {
        event.preventDefault();
        const getNote =  event.target.name.value;
        this.context.addNote(getNote);
        
    }

    render(){

        let isNotes = this.context.notes;

        return (
            <div>
                {isNotes.map((note) => {
                    return (
                        <div>
                            <h2>{note}</h2>
                            
                        </div>
                    )
                })}

                <form onSubmit={this.handleSubmit}>
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