'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var test = require('tape');
var remark = require('remark');
var html = require('remark-html');
var metaPlugin = require('./');

/*
 * Tests.
 */

test('No YAML', function (t) {
    remark()
        .use(metaPlugin)
        .process('#Foo bar\n', function (err, file) {
            if (err) {
                return t.fail(err)
            }
            t.equal(
                file.contents,
                '\\#Foo bar\n',
                'Should not fail without yaml'
            )
            t.end()
        })
})

test('Creates a meta property when there is YAML', function (t) {
    remark()
        .use(metaPlugin)
        .process([
            '---',
            'foo: bar',
            '---',
            ''
        ].join('\n'), function (err, file) {
            if (err) {
                return t.fail(err)
            }
            t.equal(file.meta.foo, 'bar', 'A meta property is created')
            t.end()
        })
})

test('The meta object can be extended', function (t) {
    remark()
        .use(metaPlugin)
        .process([
            '---',
            'foo: bar',
            '---',
            '---',
            'foo: boo',
            '---',
            ''
        ].join('\n'), function (err, file) {
            if (err) {
                return t.fail(err)
            }
            t.equal(file.meta.foo, 'boo', 'The meta object is extended')
            t.end()
        })
})

test('All properties are set', function (t) {
    remark()
        .use(html)
        .use(metaPlugin)
        .process([
            '---',
            'foo: bar',
            'bar: foo',
            '---',
            ''
        ].join('\n'), function (err, file) {
            if (err) {
                return t.fail(err)
            }
            t.deepEqual(
                Object.keys(file.meta),
                ['foo', 'bar'],
                'All properties are set'
            )
            t.end()
        })
})

test('Objects can be nested', function (t) {
    remark()
        .use(html)
        .use(metaPlugin)
        .process([
            '---',
            'foo:',
            '  bar: nested',
            '---',
            ''
        ].join('\n'), function (err, file) {
            if (err) {
                return t.fail(err)
            }
            t.equal(file.meta.foo.bar, 'nested', 'Objects can be nested')
            t.end()
        })
})
