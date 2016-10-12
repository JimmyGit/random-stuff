
Word repetition checking with JavaScript - BrettTerpstra.com

 
Word repetition checking with JavaScript - BrettTerpstra.com
Ok, I made something interesting (to me) last night. It’s probably not worth taking the time to write up, but so...



var obj = document.body.getElementsByTagName('*');
var y = 0;
var z = 1;
var counter = 1;
var wordArr = [{}];
var c =0;


for (var i = 0; i < obj.length; i++) {

  if (i != 2) {

  var wordCount = obj[i].innerText.toLowerCase().replace(/[,.-?!]/g, '').split(" ");

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

    if ( wordCount[y].length > 3) {

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
        console.log("PUSHED!");
      }

      c = 0;
    }

      y++;
      counter = 1;
      z = y + 1;  
    }
    //Word Count End


  }

}

//END

wordArr.sort(function(obj1, obj2){ return obj2.num - obj1.num });

