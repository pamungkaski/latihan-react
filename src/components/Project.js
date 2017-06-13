import React, { Component } from 'react';
import * as firebase from 'firebase';

class Projects extends Component {
    constructor(){
        super();
        this.state = {
            attractions:[]
        }
    }
    componentDidMount(){
        const rootRef = firebase.database().ref().child('attractions');
        rootRef.on('value', snap=> {
            this.setState({
                attractions: snap.val()
            });
            let x;
            let list = [];
            for( x in this.state.attractions){
                let attr = {
                    id: x,
                    name: this.state.attractions[x].name,
                    location: this.state.attractions[x].location
                };
                list.push(attr)
            }
            this.setState({
                attractions: list
            });
            //console.log(this.state.attractions)
        });
    }
    render() {
        const attList = this.state.attractions.map(function (x,y) {
            console.log(x);
            return (
                0
            )
        });
        return (
            <div className="Projects">
                <ol>
                    {attList}
                </ol>
            </div>
        );
    }
}

export default Projects;
