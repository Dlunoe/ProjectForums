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
                {ForumTopics}
            </div>
        )
    }
}
export default ForumsContainer;