import test from 'ava';
import touch from 'touch';
import bin from './';

test.before(() => {
	touch.sync('./node_modules/.bin/electron');
});

test(t => {
	return bin().then(res => {
		t.ok(res.indexOf('electron') >= -1);
	});
});
