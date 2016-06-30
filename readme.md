# remark-yaml-meta

Extract YAML front-matter from markdown.

## Installation

[npm][]:

```bash
npm install remark-yaml-meta
```

**remark-yaml-meta** is also available as an AMD, CommonJS, and
globals module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var remark = require('remark');
var meta = require('remark-yaml-meta');
```

Process:

```javascript
var file = remark().use(meta).process([
    '---',
    'foo:',
    '  bar: true',
    '---',
    ''
].join('\n')).meta;
```

Yields:

```javascript
{ foo: { bar: true }}
```

## API

### `remark.use(yamlConfig)`

Passes the configuration at the `remark` field as [parse][parse-settings]
and [stringify][stringify-settings] settings.

Just like [**remark-yaml-config**][remark-yaml-config], but the parsed object
is saved to the `meta` property of the retuned [`VFile`][unified-file].

## License

[MIT][license] © [Chris Gomez][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/akagomez/remark-yaml-meta.svg

[build-status]: https://travis-ci.org/akagomez/remark-yaml-meta

[coverage-badge]: https://img.shields.io/codecov/c/github/akagomez/remark-yaml-meta.svg

[coverage-status]: https://codecov.io/github/akagomez/remark-yaml-meta

[releases]: https://github.com/akagomez/remark-yaml-meta/releases

[license]: LICENSE

[author]: http://akagomez.com

[npm]: https://docs.npmjs.com/cli/install

[remark]: https://github.com/wooorm/remark

[parse-settings]: https://github.com/wooorm/remark/blob/master/packages/remark-parse/readme.md#options

[stringify-settings]: https://github.com/wooorm/remark/blob/master/packages/remark-stringify/readme.md#options

[remark-yaml-config]: https://github.com/wooorm/remark-yaml-config

[unified-file]: https://github.com/wooorm/unified#file

[unified-process]: https://github.com/wooorm/unified#processorprocessfilevalue-options-done
