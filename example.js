// Dependencies:
var remark = require('remark');
var metaPlugin = require('./index.js');

// Process:
var file = remark().use(metaPlugin).process([
    '---',
    'foo:',
    '  bar: true',
    '---',
    ''
].join('\n'));

// Yields:
console.log('markdown', JSON.stringify(file.meta, 0, 2));
