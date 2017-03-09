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
