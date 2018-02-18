

// set global variables:

var number = 30;
var intervalId;

var trivia = {
    triviaQuestion: [{
        question: "When did Operation Overlord occur?",
        answers: ["December 7 1941", "June 7 1942", "June 6 1944", "August 9 1945"],
        correctAnswer: "June 6 1944"
    },
    {
        question: "During the battle of Midway: The planes took off today, fought tomorrow, and landed yesterday.",
        answers: ["True", "False"],
        correctAnswer: "True"
    }]
};

// mainline code:

// console.log(trivia.triviaQuestion[0].length);

run();

for (i = 0; i < trivia.triviaQuestion.length; i++) {
    console.log(trivia.triviaQuestion[i].question);
    // var i = 1;
    question(i);
    run();
    console.log("question: " + trivia.triviaQuestion[i].question);
    console.log("answers: " + trivia.triviaQuestion[i].answers);
    console.log("correct " + trivia.triviaQuestion[i].correctAnswer);
}

console.log(trivia.triviaQuestion.length)

// console.log(trivia.triviaQuestion[0].question)
// console.log(trivia.triviaQuestion[1].question)

// functions:

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    number--;

    timeNumber = timeConverter(number);

    $("#show-time").html("<h1>" + timeNumber + "</h1>");

    if (number === 0) {

        stop();

        // alert("Time Up!");

    } else if (number < 20 && number >= 10) {

        $("#show-time").css("color", "yellow");

    } else if (number < 10) {

        $("#show-time").css("color", "red");

    }
}

function stop() {
    clearInterval(intervalId);
}

function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
};

function question(questionNumber) {
    var triviaQuestionDiv = $("<div class='actualQuestion'>");
    // console.log(triviaQuestionDiv);
    // console.log("logging: " + this.class);

    var question = questionNumber

    var actualQuestion = trivia.triviaQuestion[questionNumber].question;
    console.log(actualQuestion);
    var question = $("<p>").text(actualQuestion);
    // console.log(question);
    triviaQuestionDiv.append(question);
    console.log(actualQuestion);



    for (x = 0; x < trivia.triviaQuestion[questionNumber].answers.length; x++) {
        // console.log(trivia.triviaQuestion[questionNumber].answers[x]);
        var answer = $("#question").append("<input type='radio' name='optradio'>" + trivia.triviaQuestion[questionNumber].answers[x] + "</input>");
        var a = $("<div id='question'>");

          a.addClass("answer");
        //   // Adding a data-attribute
          a.attr("data-name", answer);
        //   // Providing the initial button text
          a.text(actualQuestion);
        //   // Adding the button to the buttons-view div
          $("#trivia").append(a);
    }
};

    // triviaQuestionDiv.append(answer);
    // $("#triviaQuestionDiv").append(triviaQuestionDiv);
