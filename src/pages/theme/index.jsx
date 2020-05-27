import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Theme extends Component {
    
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Link to={ `/` }>回到home</Link><br/>
                <Link to={ `/theme/color` }>去配色方案</Link>
            </div>
        )
    }
}
