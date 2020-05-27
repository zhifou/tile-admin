import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {observer, inject} from 'mobx-react';

@inject('TodoStore')
@observer
class Home extends Component {

    static propTypes = {
        TodoStore: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.gotoDetail = this.gotoDetail.bind(this);
        this.gotoTheme = this.gotoTheme.bind(this);
    }

    addTodo() {
        let todoStore = this.props.TodoStore;
        console.log(todoStore.todos);
        todoStore.addTodo();
    }

    removeTodo() {
        let todoStore = this.props.TodoStore;
        todoStore.removeTodo();
    }

    gotoDetail() {
        this.props.history.push(`/detail/${3}`);
    }

    gotoTheme() {
        this.props.history.push(`/theme`);
    }

    render() {
        const { TodoStore, location, history } = this.props;
        let { todos } = TodoStore;
        return (
            <div className="app">
                <div><h1>这是一个简单的Todo列表</h1></div>
                <div className="app-op">
                    <Button variant="contained" color="primary" onClick={this.addTodo}>添加todo</Button>
                    <Button variant="contained" color="primary" onClick={this.removeTodo}>删除todo</Button>
                    <Button variant="contained" color="primary" onClick={this.gotoDetail}>去detail页</Button>
                    <Button variant="contained" color="primary" onClick={this.gotoTheme}>去theme页</Button>
                    <Link to={ `/404` }>去404页面</Link>
                </div>
                <div className="app-list">
                {
                    todos.map((todo, index) => {
                    return (
                        <div key={index}>{todo}</div>
                    )
                })}
                </div>

            </div>
        );
    }
}

export default Home;
