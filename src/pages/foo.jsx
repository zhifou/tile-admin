import React, { Component, Fragment } from "react";
import Button from '@material-ui/core/Button';
import DragAndDrop from '../components/draganddrop';

class Foo extends Component {
    render() {
        return (
            <Fragment>
                <h1>Foo</h1>
                <Button variant="contained" color="primary">Hello Alice!</Button>
                <DragAndDrop/>
            </Fragment>
        );
    }
}

export default Foo;