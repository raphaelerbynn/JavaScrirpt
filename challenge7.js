//function constructor for question


(function () {
    var questions = [];
    var scores = 0;


    var Question = function (question, answers, correctAns) {

        this.question = question;
        this.answers = answers;
        this.correctAns = correctAns;

    }

    Question.prototype.displayQuestion = function () {

        console.log(this.question);
        for (var j = 0; j < this.answers.length; j++) {
            console.log('\t' + this.answers[j]);
        }

    }

    Question.prototype.checkAnswer = function (userAnswer) {
        var sc;
        if (userAnswer === this.correctAns) {
            console.log('Correct!!!');
            // console.log('Your score is: ' + scores);
            sc = true;
        }
        else {
            console.log('Incorrect!!! \nWabon dodo!!!');
            // console.log('Your current score is: ' + scores)
            sc = false;
        }
        this.displayScore()(sc);
    }

    Question.prototype.displayScore = function(){
        return function(correct){
            if(correct){
                scores += 2;
                console.log('Your score is: '+scores);
            }else{
                console.log('Your current score is: '+scores);
            }
            
        }
    }
    // Question.prototype.score = function(){
    //     var sc=0;
    //     return function (correct){
    //         if (correct) {
    //             sc += 2;
    //         }
    //         return sc;
    //     }
    // }

    // var keepScore = displayScore();
  
        









    function nextQuestion() {

        var questionNumber = Math.floor(Math.random() * (questions.length));
        questions[questionNumber].displayQuestion();

        var userInput = prompt('What is the answer? \nChoose the number beside the answer');
        if (userInput !== 'exit') {
            questions[questionNumber].checkAnswer(parseInt(userInput));
            console.log('---------------------------------------------------');
            nextQuestion();
        }    
    }





    var question1 = new Question(
        'Is JavaScript and Java the same language',
        ['1. Yes', '2. No'],
        2
    );
    var question2 = new Question(
        'What is the name of method borrowing in JS?',
        ['1. Borrow', '2. Logging', '3. Call', '4. Invoke'],
        3
    )
    var question3 = new Question(
        'What is the function of console.log() in JS?',
        ['1. To log', '2. To save', '3. Input', '4. To print out'],
        4
    )

    // var questionNumber = Math.floor(Math.random() * (questions.length));

    // console.log(questions[questionNumber].question);
    // for (var j = 0; j < questions[questionNumber].answers.length; j++) {
    //     console.log('\t' + questions[questionNumber].answers[j]);
    // }



    questions.push(question1);
    questions.push(question2);
    questions.push(question3);


    nextQuestion();




})();

















