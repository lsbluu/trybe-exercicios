import React, {Component} from 'react';
import Image from './Image';


class UserProfile extends Component{
    render(){

        
        return (
            <div>
                <p>{this.props.usere.name}</p>
                <p>{this.props.usere.email}</p>
                <Image source={this.props.usere.avatar} alternativeText="User Avatar" />
            </div>
            
        );
    }
}


export default UserProfile
