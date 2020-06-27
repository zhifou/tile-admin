/**
* @file 按钮组件
*/
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './button.css';

class Button extends PureComponent {
    constructor(props) {
        super(props);

        this.name = 'Button';
        this.state = {
            value: this.props.value || this.props.children,
            clickClassName: ''
        };

        this.onClick = this.onClick.bind(this);

        console.log('1.constructor构造函数');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        console.log(nextProps, prevState);
        return true;
    }

    onClick() {
        if (this.props.url) {
            window.location = this.props.url;
        }
        if (this.props.onClick) {
            this.props.onClick({});
        }
        this.setState({
            clickClassName: 'dur-c-button-click'
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        console.log(prevProps, prevState);
        return 'top: 200';
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState, snapshot);
    }

    render() {
        console.log('render');
        let className = this.props.className || '';
        return (
            <div className={`dur-c-button ${this.state.clickClassName} ${className}`} style={this.props.style || {}}
                onClick={this.onClick}>{this.state.value}</div>
        );
    }

    componentWillUnmount() {
        this.setState({
            clickClassName: ''
        });
        console.log('componentWillUnmount');
    }
}

Button.propTypes = {
    // 跳转地址
    url: PropTypes.string,
    // 内容
    value: PropTypes.string,
    // 样式
    style: PropTypes.object,
    // 点击事件方法
    onClick: PropTypes.func,
    // 类名
    className: PropTypes.string,
};

/* eslint-disable */
export default Button;
