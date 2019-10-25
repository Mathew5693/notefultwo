import React from 'react'
import ApiContext from '../ApiContext'

export default class AddFolder extends React.Component {

    static contextType = ApiContext;

    handleSubmit = (event) => {
        event.preventDefault();
        const getName =  event.target.name.value;
        this.context.addFolder(getName);
        
    }

    render(){

        let isFolder = this.context.folders;

        return (
            <div>
                {isFolder.map((folderName) => {
                    return (
                        <div>
                            <h2>{folderName.name}</h2>
                            
                        </div>
                    )
                })}

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Folder Name:
                        <input type="text" name="name" />
                    </label>
                        <button type="Submit">Add Folder</button>
                </form>
           
           </div>
        )
    }
}