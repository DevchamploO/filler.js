# Filler.js ![npm (scoped)](https://img.shields.io/npm/v/@usertiff/filler.js.svg)

`Filler.js` is a light weight and easy to use JavaScript plugin that makes adding Lorem Ipsum text to HTML quick and painless. No copy pasting or searching online. It's perfect for website templates, mockups, or anywhere you might need gibberish text.

## Installation

Install via npm:

`$ npm i @usertiff/filler.js --save`

or yarn:

`$yarn add @usertiff/filler.js`

or you can download this repo and add `filler.js` or `filler.min.js` into your project folder.

## Usage

To use filler.js add a script tag at the bottom of the body tag.

```html
<body>
   /*content here...*/

   <script src="./filler.js"></script>
</body>
```

Or within appropiate JavaScript files

```javascript
const filler = require('./filler');
```

### The Magic

To add text to an element add the `filler` class. Finally add the data attribute `data-lorem` assigned with the desired word count to the element. If the element already has text then filler.js will append the lorem ipsum. That's it!

Example:

```html
<p class="filler" data-lorem="50"><p>
```

## License

Filler.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)
