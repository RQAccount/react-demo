var React = require('react');

import './index.css';

var ProductBox = React.createClass({
    render: function () {
        return (
            <div className="productBox">
                Hello World!
            </div>
        );
    }
});

module.exports = ProductBox;