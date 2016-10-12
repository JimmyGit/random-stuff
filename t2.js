var x = ["a", "programming", "language", "is", "a", "formal", "computer", "language", "or", "constructed", "language", "designed", "to", "communicate", "instructions", "to", "a", "machine,", "particularly", "a", "computer.", "programming", "languages", "can", "be", "used", "to", "create", "programs", "to", "control", "the", "behavior", "of", "a", "machine", "or", "to", "express", "algorithms."]
var y = 0;
var z = 1;
var counter = 1;
var wordArr = [{}];

    //Word Count Start
    while (y < 10) {
      while (z < x.length) {

        if (x[y] === x[z]){
            counter++;
            z++;
        }

        else {
          z++;
        }
      }

      var information = {
        "word": x[y],
        "num": counter
      }

      if ( x[y].length <= 3 || x[y] === "where") {
        y++;
        counter = 1;
        z = y + 1;

      }

      else if (x.indexOf(x[y]) > 1 ) {
  	        y++;
	        counter = 1;
	        z = y + 1;
	        console.log(x[y]);
      }
     
      else {
        wordArr.push(information);
        y++;
        counter = 1;
        z = y + 1;
      }

    }
    //Word Count End


  
/******************************/


var x = ["a", "programming", "language", "is", "a", "formal", "computer", "language", "or", "constructed", "language", "designed", "to", "communicate", "instructions", "to", "a", "machine,", "particularly", "a", "computer", "programming", "languages", "can", "be", "used", "to", "create", "programs", "to", "control", "the", "behavior", "of", "a", "machine", "or", "to", "express", "algorithms"]
var y = 0;
var z = 1;
var counter = 1;x
var wordArr = [{}];
var c = 0;


    //Word Count Start
    while (y < x.length) {
      
      while (z < x.length) {

        if (x[y] === x[z]){
            counter++;
            z++;
        }

        else {
          z++;
        }
      }
      //End z while

     	var information = {
			"word": x[y],
			"num": counter
		}

		if ( x[y].length > 3 ) {

			//Checking for duplicates 
			for (a = 0; a < wordArr.length; a++) {
				
				console.log("Word Arr word: " + wordArr[a].word);
				console.log("X Arr word: " + x[y]);

				if (wordArr[a].word == x[y]) {
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

		if ( wordCount[y].length > 3 ) {

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


