'use strict';

var _afile = require('afile');

var _afile2 = _interopRequireDefault(_afile);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _npmBinPath = require('npm-bin-path');

var _npmBinPath2 = _interopRequireDefault(_npmBinPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
	var binName = 'electron' + (process.platform === 'win32' ? '.cmd' : '');

	return (0, _npmBinPath2.default)().then(function (ps) {
		return (0, _afile2.default)(ps.map(function (s) {
			return _path2.default.join(s, binName);
		}));
	});
};