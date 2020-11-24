const path = require('path');

export default function init(options) {
  this.addPlugin({ src: path.resolve(__dirname, 'plugin.js'), mode: 'client', options });
}

module.exports.meta = require( '../package.json' );