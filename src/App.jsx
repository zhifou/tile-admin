import React from 'react';
import './App.scss';

// const { Header, Sider, Content } = Layout;

export default class App extends React.Component {

    render() {
        return (
            <div className='main-layout'>
            layout
                {this.props.children}
            </div>
        );
    }
}
