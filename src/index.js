import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import store from './store/index';
import Router from './routes/router';

ReactDom.render(
    <Provider {...store}>
        <Router />
    </Provider>, document.getElementById('root')
);

// ReactDom.render(
//     <Provider {...store}>
//         <HashRouter>
//             <App />
//         </HashRouter>
//     </Provider>, document.querySelector('#root')
// )

