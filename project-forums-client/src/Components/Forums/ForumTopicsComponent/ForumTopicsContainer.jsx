import React, {Component} from 'react';
import TopicsList from './TopicsList';

class ForumTopics extends Component{
    constructor(){
        super();
        
    }
    render(){
        return(
            <div>
                This is forum Topics for a ForumTopics
                {/* Will add forum topics within a category i.e. General Discussion */}
                {/* Threads will be listed here */}
                {TopicsList}
            </div>
        )
    }
}

export default ForumTopics;