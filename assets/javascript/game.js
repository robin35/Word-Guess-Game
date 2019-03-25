//$(document).ready(function(){

    // -------------------- Initialize Win Global Variable  --------------------

    var win = 0;
    console.log("win: " +  win);


    // -------------------- Variables that Reset on Win  --------------------

    //function myResetFunction(){
        //Create array of words
        var gameWords =  [
            "WASHINGTON", "JADAMS", "JEFFERSON", "MADISON", "MONROE", 
            "JQADAMS", "JACKSON", "VANBUREN", "WHARRISON", "TYLER", 
            "POLK", "TAYLOR", "FILLMORE", "PIERCE", "BUCHANAN", 
            "LINCOLN", "AJOHNSON", "GRANT", "HAYES", "GARFIELD", 
            "ARTHUR", "CLEVELAND", "BHARRISON", "MCKINLEY", "TROOSEVELT", 
            "TAFT", "WILSON", "HARDING", "COOLIDGE", "HOOVER", 
            "FDROOSEVELT", "TRUMAN", "EISENHOWER", "KENNEDY", "LBJOHNSON", 
            "NIXON", "FORD", "CARTER", "REAGAN", "GHWBUSH", 
            "CLINTON", "GWBUSH", "OBAMA", "TRUMP"
        ];

        var arraySize = gameWords.length;

        console.log("gameWords: " + arraySize);


        //Randomly select word to play
        var randomIndex = Math.floor((Math.random() * arraySize));
        var wordToGuess = gameWords[randomIndex];
        console.log("randomIndex: " + randomIndex);
        console.log("wordToGuess: " + wordToGuess);


        //Create arry of individual letters from word selected
        var wordLetters = wordToGuess.split("");
        console.log("wordLetters: " + wordLetters);


        //Initalize array that will hold underscores equal to length of the word
        var wordLength = wordToGuess.length;
        var underScore;
        console.log("wordLength: " + wordLength);
    

        //Create initial underscores array equal to length of the word
        //The underscores array will reproduce as letters are guessed during the game
        var underScoreArray = [];
        for(var i = 0; i < wordLength; i++){
            underScoreArray[i] = "__ ";
            underScore = underScoreArray.join(" ");
            document.getElementById("underScoreDisplay").innerHTML = underScore;
        }
        console.log("underScore: " + underScore);


        //Initialize variable to hold letters guessed
        var alreadyGuessed = "";
        console.log("alreadyGuessed: " + alreadyGuessed);


        //Score and game flags
        var attemptsLeft = 12;
        var gameOver = false;
        console.log("attemptsLeft: " + attemptsLeft);
        console.log("gameOver: " + gameOver);

    //}

    //myResetFunction()

    // -------------------- Makes pressing the Enter key behave like a Button click  --------------------
    
    $(document).on("keypress", "form", function(event) { 
        return event.keyCode != 13;
    });

    var input = document.getElementById("userGuess");
    
    input.addEventListener("keyup", function(event) {
    
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("myBtn").click();
        }
    });


    // -------------------- Start Game  --------------------


        $("button").click(function() {

            //Get user guess
            var userGuess1 = $("input:text").val();
            var userGuess = userGuess1.toUpperCase();
            console.log("userGuess1:", userGuess1);
            console.log("userGuess:", userGuess);


             //Check user guess       
            for (var j = 0; j < wordLength; j++) {

                //Update underscore array if letter correctly guessed
                if (userGuess === wordLetters[j]) {
                    underScoreArray[j] = userGuess;
                    console.log("underScoreArray:", underScoreArray[j]);               
                    var n = underScoreArray.includes("__ ", 0);

                    //Determine if game has been won
                    if(n === false){
                        win = win + 1;
                        gameOver = true;
                        console.log("gameOver: " + gameOver);
                        console.log("win: " +  win);

                     }
                }
            }

            
            //Determine if letter has already been guessed
            var duplicateGuess = alreadyGuessed.indexOf(userGuess);

            if (duplicateGuess > -1) {
                skip = true;
            }
            else{
                skip = false;
            }
            console.log("alreadyGuessed: " + alreadyGuessed);
            console.log("duplicateGuess: " + duplicateGuess);
            console.log("skip: " + skip);


            //If letter has not been already guessed, update aready guessed list and increment attempts
            if(skip === false){
                //Update letters guessed    
                alreadyGuessed = alreadyGuessed + " " + userGuess;
                
                //Recalculate attempts
                attemptsLeft = attemptsLeft - 1;
            }
            console.log("alreadyGuessed: " + alreadyGuessed);


            //Reprduce underscore array and display letters that were correctly guessed
            underScore = underScoreArray.join(" ");
            document.getElementById("underScoreDisplay").innerHTML = underScore;


            //Return focus to input box
            $('#userGuess').focus(function() { 
                $(this).val(''); 
              });
            document.getElementById("userGuess").focus();


            //Update display
            document.getElementById("attemptsLeft").innerHTML = attemptsLeft;
            document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed;
            document.getElementById("wins").innerHTML = win;
 

            //Determine if game has been lost
            if(attemptsLeft === 0) {
                gameOver = true;
            }
            console.log("attemptsLeft: " + attemptsLeft);
            console.log("gameOver: " + gameOver);


            //Game Over; Reset variables
            if(gameOver == true){

                alreadyGuessed = "";
                attemptsLeft = 12
                document.getElementById("attemptsLeft").innerHTML = attemptsLeft;
                document.getElementById("alreadyGuessed").innerHTML = alreadyGuessed;        
                
                underScoreArray = [];
                wordLength = 0;
                gameOver = false;

                //Randomly select word to play
                randomIndex = Math.floor((Math.random() * arraySize));
                wordToGuess = gameWords[randomIndex];
                console.log("randomIndex: " + randomIndex);
                console.log("wordToGuess: " + wordToGuess);


                //Create arry of individual letters from word selected
                wordLetters = wordToGuess.split("");
                console.log("wordLetters: " + wordLetters);


                //Initalize array that will hold underscores equal to length of the word
                wordLength = wordToGuess.length;

                underScore;
                console.log("wordLength: " + wordLength);
    

                //Create initial underscores array equal to length of the word
                //The underscores array will reproduce as letters are guessed during the game
                underScoreArray = [];
                for(var i = 0; i < wordLength; i++){
                    underScoreArray[i] = "__ ";
                    underScore = underScoreArray.join(" ");
                    document.getElementById("underScoreDisplay").innerHTML = underScore;
                }
                console.log("underScore: " + underScore);
            }




         });




//});