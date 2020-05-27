import React from 'react';
import './App.scss';

// const { Header, Sider, Content } = Layout;

export default class Layout extends React.Component {

    render() {
        return (
            <div className='main-layout'>
            layout - footer
                {this.props.children}
            </div>
        );
    }
}
