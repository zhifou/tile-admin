import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Page404 extends Component {
    
    componentDidMount() {
    }

    render() {
        return (
            <div>
                我是404页面 <Link to={ `/` }>回到home</Link>
            </div>
        )
    }
}
