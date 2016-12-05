require("lodash");
var ReactDOM = require("react-dom");
var React = require("react");
require("../stylesheets/main.scss");

var WelcomeToNodeServer = require('./wecome_to_node_server.jsx')
ReactDOM.render(<WelcomeToNodeServer/>, document.getElementById('app'));
