Filler is an ultra lightweight plugin that creates Lorem Ipsum text inside of HTML elements. It is written in vanilla JavaScript to make it easy to use with no depencies. No initalizing or setup - it works perfectly straight out of the box. 

## Getting Started

### Installation

Install via Package Managers

```
//npm
$ npm install @usertiff/filler.js
//yarn
$yarn add @usertiff/filler.js
```

`const filler = require('./filler')` will load filler into your javascript file.

Install via source files after download
`<script src="../filler.js"></script>`

### Usage

To add text to an element add the `filler` class. Finally add the data attribute `data-lorem` assigned with the desired word count to the element. If the element already has text then filler.js will append the lorem ipsum. That's it!

Example:

```html
<p class="filler" data-lorem="50"><p>
```
