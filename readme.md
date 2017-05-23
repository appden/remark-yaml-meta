# remark-yaml-meta

Extract YAML front-matter from markdown.

## Installation

[npm][]:

```bash
npm install @justinc/remark-yaml-meta
```

## Usage

Dependencies:

```javascript
var remark = require('remark');
var metaPlugin = require('@justinc/remark-yaml-meta');
```

Process:

```javascript
remark()
    .use(metaPlugin)
    .process([
        '---',
        'foo:',
        '  bar: true',
        '---',
        ''
    ].join('\n'), function (err, file) {
        // file.meta now has the parsed YAML as an Object
        console.log(file.meta) // { foo: { bar: true } }
    })
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

[license]: LICENSE

[author]: http://akagomez.com

[npm]: https://docs.npmjs.com/cli/install

[parse-settings]: https://github.com/wooorm/remark/blob/master/packages/remark-parse/readme.md#options

[stringify-settings]: https://github.com/wooorm/remark/blob/master/packages/remark-stringify/readme.md#options

[remark-yaml-config]: https://github.com/wooorm/remark-yaml-config

[unified-file]: https://github.com/wooorm/unified#file
