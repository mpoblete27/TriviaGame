// list of quiz questions, turn into an array of objects

var questionArray = [
        {//1
        question: "Who is not a Marvel character?",
        answers: [
        "Spider-Man",
        "The Mandarin",
        "Silver Surfer",
        "Wolverine"
        ],
          correctAnswer: "Silver Surfer"
        },
        {//2
        question: "Who is known as the 'Devourer of Worlds'?", 
        answers: [
        "Galaxus",
        "Galactus",
        "Galaxy Quest",
        "Galaxnus"
        ],
        correctAnswer: "Galactus"
        },
        {//3
        question: "What is Captain America's real name?",
        answers: [
        "Steve Rogers",
        "Clinton Barton",
        "Charles Xavier",
        "Matthew Murdock"
        ],
        correctAnswer: "Steve Rogers"
        },
        {//4
        question: "Who is known as 'The Sorcerer Supreme'?", 
        answers: [
        "Loki",
        "Scarlet Witch",
        "Dr. Fate",
        "Dr. Strange"
        ],
        correctAnswer: "Dr. Strange"
        },
        {//5
        question: "What type of radiation caused Bruce BAnner to turn into The Hulk?", 
        answers: [
          "Alpha Radiation",
          "Beta Radiation",
          "Gamma Radiation",
          "Cosmic Radiation"
        ],
        correctAnswer: "Gamma Radiation"
        },
        {//6
        question: "Which of these has not been an iteration of Spider-Man?", 
        answers: [
          "Miles Morales",
          "Miguel Ohara",
          "Mac Gargan",
          "Otto Octavius"
        ],
        correctAnswer: "Mac Gargan"
        },
        {//7
        question: "Who did Bradley Cooper play in the MCU version of Guardians of the Galaxy?", 
        answers: [
          "Rocket Racoon",
          "Ronan the Accuser",
          "Drax the Destoyer",
          "Peter Quill"
        ],
            correctAnswer: "Rocket Racoon"
        },
        {//8
        question: "What is the name of the company Iron Man owns?", 
        answers: [
        "Stark Corporation",
        "Stark Industries",
        "Star Laboratories",
        "Stark Enterprise"
        ],
        correctAnswer: "Stark Industries"
        },
        {//9
        question: "What is Thor the god of?", 
        answers: [
          "Hammers",
          "Storms",
          "Lightning",
          "Thunder"
        ],
        correctAnswer: "Thunder"
        },
        {//10
        question: "True of False? In the MCU, Thanos did nothing wrong", 
        answers: [
        "True",
        "False",
        "Why is there an internet meme in this quiz?",
        "Seriously, the right answer is based on the internet meme"
        ],
        correctAnswer: "True"
        }
    ]

// setup the timer and have it countdown
var timer = 120;
//countdown from two minutes, need to code stop function and function to go to results
var intervalId;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    timer--;
    
    $("#time-left").html("<h2>" + timer + "</h2>");
    if (timer === 0) {
      alert("Time Up!");
      stop();
    }
  }
  //stop function once timer runs out
  function stop() {
    clearInterval(intervalId);
    showResults(); 
  }
run();


// make the questions to be answered?, have the answers underneath
// have each question show up in the '#quiz' div
function buildQuiz(){
	// for each question... make a new div
  for(var i = 0; i < questionArray.length; i++){
    var questionContainer = $("<div>");
    $(questionContainer).addClass("questionLine"); //add question class for the div

    // add the question to this questionLine div
    $(questionContainer).html(questionArray[i].question);
    $('#quiz').append(questionContainer);
    //make the answerline
    var answerContainer = $("<div>");
    $(answerContainer).addClass("answerLine"); //add answer class for the div

    // add the answers to answerLine div
    $(answerContainer).html('<p>' + questionArray[i].answers[0] + '</p>' + '<p>' + questionArray[i].answers[1] + '</p>' + '<p>' + questionArray[i].answers[2] + '</p>' + '<p>' + questionArray[i].answers[3] + '</p>');
    $('#quiz').append(answerContainer);
    $("<p>").addClass("chosenAnswer");
    //Give each correct answer in each answer array a "correct" answer class
    // $(questionArray[0].answers[2]).addClass("rightAnswer");
    // $(questionArray[1].answers[1]).addClass("rightAnswer");
    // $(questionArray[2].answers[0]).addClass("rightAnswer");
    // $(questionArray[3].answers[3]).addClass("rightAnswer");
    // $(questionArray[4].answers[2]).addClass("rightAnswer");
    // $(questionArray[5].answers[2]).addClass("rightAnswer");
    // $(questionArray[6].answers[0]).addClass("rightAnswer");
    // $(questionArray[7].answers[1]).addClass("rightAnswer");
    // $(questionArray[8].answers[3]).addClass("rightAnswer");
    // $(questionArray[9].answers[0]).addClass("rightAnswer");
  }
     
};
buildQuiz();
// make the submit option?
var correct = 0
var incorrect = 0
var userAnswers = [];
$(document).ready(function(){
  $(".chosenAnswer").on("click", function(){
    if(chosenAnswer=== questionArray[i].correctAnswer){
      $(this).css("color", "green");
      $(this).push(userAnswers);
      correct++;
    }else{
      $(this).css("color", "red");
      $(this).push(userAnswers);
      incorrect++;

    };
  });
});


// how to view the results?
function showResults(){
  $(".questionLine").html("");
  $(".answerLine").html("");
  alert("All Done! You got " + correct + " questions right and " + incorrect + " questions wrong.");
  var resultsContainer = $("<div>");
  $(resultsContainer).html("Correct Answers: " + correct + " Incorrect Answers: " + incorrect);
  $('#results').append(resultsContainer);
  return;
}
// 
// 




