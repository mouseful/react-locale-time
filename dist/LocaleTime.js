'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var LocaleTime = function LocaleTime() {
  var _useState = React.useState(null),
      date = _useState[0],
      setDate = _useState[1];

  var tick = function tick() {
    setDate(new Date());
  };

  React.useEffect(function () {
    setInterval(function () {
      return tick();
    }, 1000);
  }, []);

  if (!date) {
    return null;
  }

  return React__default.createElement("div", null, date.toLocaleTimeString());
};

module.exports = LocaleTime;
