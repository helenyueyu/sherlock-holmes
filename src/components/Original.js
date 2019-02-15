const rp = require('request-promise')
const $ = require('cheerio')
const url = 'http://www.gutenberg.org/files/1661/1661-h/1661-h.htm'

const got = require('got')

// I don't quite understand the huge freaking library???
// 2525 unique paragraphs

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

function HTMLCode(char) {
  if (char === '&#8216' | char === '&#8217') {
    return "'"
  } else if (char === '&#8220' | char === '&#8221') {
    return '"'
  } else if (char === '&#8212') {
    return '-'
  } else {
    return char
  }
}

rp(url)
  .then(function(html) {
    // console.log($('p', html).length)
    // console.log(Object.keys($('p', html)[0]))

    // We want to get all the HTML Codes so we can create a conversion

    // console.log(html.split('<p>').map(x => x.match(/&#\d{4}/g)).flat().filter(x => x !== null).filter(onlyUnique))

    // We have &#8216, &#8217, &#8220, &#8221, &#8212
    console.log(html.split('<p>')
    .map(x => x.replace(/&#8212/g, '-')
    .replace(/[\r\n]+/g, ' ')
    .replace(/&#8220/g, '"')
    .replace(/&#8221/g, '"')
    .replace(/;/g, '')
    .replace(/&#8216/g, '')
    .replace(/&#8217/g, '')).filter((x, idx) => idx > 0))
  })
  .catch(function(err){
})
