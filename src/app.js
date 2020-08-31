const $ = require('jquery');

function printHelloWorld() {
  $('h1').text('Ciao Mondo!');
}

function init() {
  printHelloWorld();
}

$(document).ready(init);
