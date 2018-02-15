var number = 250;

var intervalId;

$("#stop").on("click", stop);

$("#resume").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    number--;

    timeNumber = timeConverter(number);

    $("#show-number").html("<h1>" + timeNumber + "</h1>");

    if (number === 0) {

        stop();

        alert("Time Up!");

    } else if (number < 20 && number >= 10) {

        $("#show-number").css("color", "yellow");

    } else if (number < 10) {

        $("#show-number").css("color", "red");

    }
}

function stop() {

    clearInterval(intervalId);
}

run();

// div {
//     width: 100px;
//     height: 100px;
//     background-color: red;
//     -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
//     -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
//     animation-name: example;
//     animation-duration: 4s;
// }

// @keyframes example {
//     0%   {background-color: red;}
//     25%  {background-color: yellow;}
//     50%  {background-color: blue;}
//     100% {background-color: green;}
// }

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

var trivia = [{
    triviaQuestion =[{
        question: "When did Operation Overlord occur?" +
            answers: ["June 6 1944", "December 7 1941", "June 7 1942", "August 9 1945"] ,
        correctAnswer: "June 6 1944"
    };
    triviaQuestion =[{
        question: "The planes took off today, faught tomorrow, and landed yesterday. Is this possible?" +
            answers: ["true", "false"] + ,
        correctAnswer: "true"
    };
}];
];
