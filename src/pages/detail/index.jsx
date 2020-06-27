import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../../components/index';

export default class Detail extends Component {
    
    componentDidMount() {
        console.log(this.props.match.params);
    }

    render() {
        return (
            <div>
                <Link to={ `/` }>回到home</Link>
                <Button className={'dur-c-biz-migureading-productcard-content-btn'} >立即下载免费阅读</Button>
            </div>
        )
    }
}
