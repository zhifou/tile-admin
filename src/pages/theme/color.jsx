
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Color extends Component {
    
    componentDidMount() {
    }

    render() {
        return (
            <div>
                我是配色方案 <Link to={ `/theme` }>回到theme</Link>
            </div>
        )
    }
}
