// Ik probeerde het eerst te doen met this, maar een String kan zichzelf niet wijzigen dus moest ik het returnen met een andere variable.
// Ik had het beter met inputValue.replace("", "") en dan wat vage codes kunnen invoeren om het te doen, maar dit was leuker:P
// je kan er nu ook arrays in doen.
String.prototype.findReplace = function (find, replace) {
  var result = this.toString();
  if (find instanceof Array) {
    for (var i = 0; i < find.length; i++) {
      while (result.indexOf(find[i]) != -1) {
        var str1 = result.substr(0, result.indexOf(find[i]));
        str1 += replace[i];
        var str2 = result.substr(result.indexOf(find[i])+1, result.length);
        result = str1 + str2;
      }
    }
  } else {
    while (result.indexOf(find) != -1) {
      var str1 = result.substr(0, result.indexOf(find));
      str1 += replace;
      var str2 = result.substr(result.indexOf(find)+1, result.length);
      result = str1 + str2;
    }
  }
  return result
}

var test = "test";

var buttons = document.getElementsByTagName("button");

buttons[0].addEventListener("click", function() {
  console.log("click");
  var inputValue = document.getElementsByTagName("input")[0].value;
  var outputs = document.getElementsByClassName("output");
  outputs[0].innerHTML += inputValue.findReplace(["a", "e", "o", "u", "i"],["!", "@", "#", "$", "%"])+"<br>";
});

//oude praktisch het zelfde maar hierboven is met prototype en kan je arrays toevoegen.
/*
var buttons = document.getElementsByTagName("button");

function codeerMetLetter(letter, Vletter, string) {
  while (string.indexOf(letter) != -1) {
    var str1 = string.substr(0, string.indexOf(letter));
    str1 += Vletter;
    var str2 = string.substr(string.indexOf(letter)+1, string.length);
    string = str1 + str2;
  }
  return string;
}

function codeer(tekst) {
  tekst = codeerMetLetter("a", "!", tekst);
  tekst = codeerMetLetter("e", "@", tekst);
  tekst = codeerMetLetter("o", "#", tekst);
  tekst = codeerMetLetter("u", "$", tekst);
  tekst = codeerMetLetter("i", "%", tekst);
  return tekst;
}

buttons[0].addEventListener("click", function() {
  var inputs = document.getElementsByTagName("input");
  var outputs = document.getElementsByClassName("output");

  outputs[0].innerHTML += codeer(inputs[0].value);

});
*/
