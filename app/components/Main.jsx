var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');


var Main = React.createClass({
  render : function(){
    return (
      <div className="font main">
        <Nav />
          <div className="row">
            <div className="columns medium-6 large-4 small-centered">
              {this.props.children}
            </div>
          </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Main;