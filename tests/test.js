const test = require('ava');

const { default: a } = require('../dist/index');

test('remove undefined value', (t) => {
	const filter = {
		foo: 'bar',
		fd: undefined
	};
	const validateFilter = a(filter);
	t.deepEqual(validateFilter, {
		foo: 'bar'
	});
});
