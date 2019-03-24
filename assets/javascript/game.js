//Javascript Document


    var gameWords =  ["WASHINGTON", "LINCOLN", "ROOSEVELT", "KENNEDY", "OBAMA"];
    var randomIndex = Math.floor((Math.random() * 5));
    var wordToGuess = gameWords[randomIndex];

    var wordLength = wordToGuess.length;
    var wordLetters = wordToGuess.split(" ");

    var underScoreArray = [];
    var underScore = "";

    var userEntered;
    console.log("userEntered", userEntered);

    var alreadyGuessed = "";
    var lettersGuesses = [];
    var lettersCorrect = 0;

    var attemptsLeft = 12;
    var youWin = 0;


//--------------------------------------------------------------------

    function myFunction2() {
    for(var i=0; i < wordLength; i++){
        underScoreArray[i] = "__ ";
        underScore = underScore + underScoreArray[i];
    }
  
    document.getElementById("underScoreDisplay").innerHTML = underScore;

    }

//--------------------------------------------------------------------





$("#userInput").on("click", function() {

        userEntered = "A";
        
            for( var j = 0; j < wordLength; j++){
                console.log("wordlength", wordLength);

                if(userEntered === wordLetters[j]){
                    underScoreArray[j] = userEntered;
                    lettersCorrect = lettersCorrect + 1;s
                    }
                else{
                    underScoreArray[j] = "__ ";
                }
            }

            if(userEntered !== wordLetters[j]){
                attemptsLeft = attemptsLeft - 1;
            }

            if(attemptsLeft == 0){
            }

            if(lettersCorrect == wordLength){
                youWin = youWin + 1;
            }

            lettersGuesses[j] = userEntered; 

            document.getElementById("underScoreDisplay").innerHTML = underScoreArray;
            document.getElementById("attemptsLeft").innerHTML = attemptsLeft;
            document.getElementById("lettersGuessed").innerHTML = lettersGuesses;
            document.getElementById("wins").innerHTML = youWin;

        }


    console.log(gameWords);
    console.log(randomIndex);
    console.log(wordToGuess);

    console.log(wordLength);
    console.log(wordLetters);

    console.log(underScoreArray);
    console.log(underScore);

    console.log(userEntered);
    console.log(lettersGuesses);
    console.log(lettersCorrect);

    console.log(attemptsLeft);
    console.log(youWin);

