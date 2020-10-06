var PropTypes = require('prop-types');

var HelperBarView = require('../react_views/HelperBarView.jsx');
var Main = require('../app');
var React = require('react');

var log = require('../log');

class IntlHelperBarView extends React.Component{

  render() {
    return (
      <HelperBarView
        items={this.getItems()}
        shown={this.props.shown}
      />
    );
  }

  fireCommand(command) {
    log.viewInteracted('intlSelect');
    Main.getEventBaton().trigger('commandSubmitted', command);
    this.props.onExit();
  }

  getItems() {
    return [{
      text: 'Polski',
      testID: 'polish',
      onClick: function() {
        this.fireCommand('locale pl_PL; levels');
      }.bind(this)
    },{
      text: 'English',
      testID: 'english',
      onClick: function() {
        this.fireCommand('locale en_US; levels');
      }.bind(this)
    }, {
      text: '日本語版リポジトリ',
      testID: 'japanese',
      onClick: function() {
        this.fireCommand('locale ja; levels');
      }.bind(this)
    }, {
      icon: 'signout',
      onClick: function() {
        this.props.onExit();
      }.bind(this)
    }
    ];
  }

};

IntlHelperBarView.propTypes = {
  shown: PropTypes.bool.isRequired,
  onExit: PropTypes.func.isRequired
}

module.exports = IntlHelperBarView;
