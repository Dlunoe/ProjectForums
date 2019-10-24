import React, {Component} from 'react';
import ForumTopics from './ForumTopicsComponent/ForumTopicsContainer';

class ForumsContainer extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                This is ForumContainer
                {/* This will be used to house Forum Categories, which will contain topics within them */}
                {/* {ForumTopics} */}
            </div>
        )
    }
}
export default ForumsContainer;