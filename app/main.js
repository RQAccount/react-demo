var React = require('react');
var ReactDom = require('react-dom');
var AppComponent = require('./components/ProductBox');

ReactDom.render(
    <AppComponent />,
    document.getElementById('content')
);