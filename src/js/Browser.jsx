import React from "react";
import ReactDOM from "react-dom";
import MaterialUI from './MaterialUI.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render(<MaterialUI />, document.getElementById('content'));
