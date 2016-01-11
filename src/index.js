'use strict';

import afile from 'afile';
import path from 'path';
import binpath from 'npm-bin-path';

module.exports = function () {
	const binName = 'electron' + (process.platform === 'win32' ? '.cmd' : '');

	return binpath().then(ps => {
		return afile(ps.map(s => {
			return path.join(s, binName);
		}));
	});
};
