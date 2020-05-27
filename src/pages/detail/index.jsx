import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Detail extends Component {
    
    componentDidMount() {
        console.log(this.props.match.params);
    }

    render() {
        return (
            <div>
                <Link to={ `/` }>回到home</Link>
            </div>
        )
    }
}
