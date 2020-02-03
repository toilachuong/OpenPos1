var str1 = "hello no (abc)and (123) @[bugs] and @[bugs2]";
var regex = /\@\[.*?\]/g;
var regex2 = /(?<=\().*?(?=\))/g;
var found = str1.match(regex2);

console.log(found);

var a =
  "this is @[test] line i [w ant](sadadasd) text [inside] square [brackets]";
var words = a.match(/[^[\]]+(?=])/g);
var words2 = a.match(/[^[\]]+(?=])/g);

console.log(words);
console.log(words2);
