var obj = document.body.getElementsByTagName('*');
var y = 0;
var z = 1;
var c = 0;
var counter = 1;
var wordCount;
var wordArr = [{}];
var top25 = [{}];
var commonWords = ["a", "the", "had", "it", "and", "but", "that", "this", "been", "from", "have", "which", "more","with", "some", "most", "used", "were", "they", "also"];

for (var i = 0; i < obj.length; i++) {
  wordCount = obj[i].innerText.toLowerCase().replace(/[,.-?!]/g, '').split(" ");

//Word Count Start
    while (y < wordCount.length) {

      while (z < wordCount.length) {

        if (wordCount[y] === wordCount[z]){
            counter++;
            z++;
        }

        else {
          z++;
        }
      }
      //End z while

      var information = {
      "word": wordCount[y],
      "num": counter
    }

    if (wordCount[y].length > 3) {

        //Checking for duplicates
        for (a = 0; a < wordArr.length; a++) {
          if (wordArr[a].word == wordCount[y]) {
            c++;
          }
        }
        //Checking for duplicates END

        //Pushing into New Array with Count
        if (c == 0) {
          wordArr.push(information);
        }
          c = 0;
      }
      y++;
      counter = 1;
      z = y + 1;
    }
    //Word Count End
}

//END

wordArr.sort(function(obj1, obj2){ return obj2.num - obj1.num });

for (var d = 1; d < wordArr.length; d++) {

  var e = 0;
  var f = 0;

  while (e < commonWords.length) {
    if (wordArr[d].word === commonWords[e]) {
      f++;
    }
    e++;
  }

  var info = {
    "word": wordArr[d].word,
    "num": wordArr[d].num
  }

  if (f == 0) {
    top25.push(info);
    if (top25.length > 25) {
      break;
    }

  }
  f = 0;

}

//Word Replace
var j = 1;
while (j < top25.length) {
  var regexp = new RegExp("\\b(" + top25[j].word + ")\\b", "gi");
  document.body.innerHTML = document.body.innerHTML.replace(regexp, top25[j].num);
  j++;
}

//Word Replace End
