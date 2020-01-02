import React from 'react';
import ApiContext from '../ApiContext'


export default class ErrorHandler extends React.Component {

    static contextType = ApiContext;
    
    render(){

        let folderID = this.props.folderID;
        let validateFolder = this.context.folders.find( folder => {
            console.log(folderID, folder.id);
            return folderID === folder.id;  
        })
        
        
        if(validateFolder === undefined){
            return(
                <div>
                    Folder ID Does Not Exist!
                </div>
                )
        } else{
            return(<></>)
        }


    }
}