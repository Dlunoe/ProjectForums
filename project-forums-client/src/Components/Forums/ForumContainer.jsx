import React, {Component} from 'react';
import ForumTopics from './ForumTopicsComponent/ForumTopicsContainer';
import config from '../Firebase/'
import Firebase from '../Firebase'
import firebase from 'firebase'
import db from 'firebase/database'

class ForumContainer extends Component{
    constructor(){
        super();

    }

    componentDidMount(){
        let threadsRef = firebase.database().ref('threads')
        console.log(threadsRef)

        let _this = this;

        threadsRef.on('value', function(snapshot){
            console.log(snapshot.val());

            _this.setState({
                posts: snapshot.val(),
                loading:false
            })
        })
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
export default ForumContainer;