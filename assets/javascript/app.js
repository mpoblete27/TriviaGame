// list of quiz questions, turn into an array of objects

var questionArray = [
        {//1
        question: "Who is not a Marvel character?",
        answers: {
          a: "Spider-Man",
          b: "The Mandarin",
          c: "Silver Surfer",
          d: "Wolverine"
          },
          correctAnswer: "c"
        },
        {//2
        question: "Who is known as the 'Devourer of Worlds'?", 
        answers: {
            a: "Galaxus",
            b: "Galactus",
            c: "Galaxy Quest",
            d: "Galaxnus"
            },
        correctAnswer: "b"
        },
        {//3
        question: "What is Captain America's real name?",
        answers: {
            a: "Steve Rogers",
            b: "Clinton Barton",
            c: "Charles Xavier",
            d: "Matthew Murdock"
            },
        correctAnswer: "a"
        },
        {//4
        question: "Who is known as 'The Sorcerer Supreme'?", 
        answers: {
            a: "Loki",
            b: "Scarlet Witch",
            c: "Dr. Fate",
            d: "Dr. Strange"
            },
        correctAnswer: "d"
        },
        {//5
        question: "What type of radiation caused Bruce BAnner to turn into The Hulk?", 
        answers: {
            a: "Alpha Radiation",
            b: "Beta Radiation",
            c: "Gamma Radiation",
            d: "Cosmic Radiation"
            },
        correctAnswer: "d"
        },
        {//6
        question: "Which of these has not been an iteration of Spider-Man?", 
        answers: {
            a: "Miles Morales",
            b: "Miguel Ohara",
            c: "Mac Gargan",
            d: "Otto Octavius"
            },
        correctAnswer: "c"
        },
        {//7
        question: "Who did Bradley Cooper play in the MCU version of Gaurdians of the Galaxy?", 
        answers: {
            a: "Rocket Racoon",
              b: "Ronan the Accuser",
              c: "Drax the Destoyer",
              d: "Peter Quill"
            },
            correctAnswer: "a"
        },
        {//8
        question: "What is the name of the company Iron Man owns?", 
        answers: {
            a: "Stark Corporation",
            b: "Stark Industries",
            c: "Star Laboratories",
            d: "Stark Enterprise"
            },
        correctAnswer: "b"
        },
        {//9
        question: "What is Thor the god of?", 
        answers: {
            a: "Hammers",
            b: "Storms",
            c: "Lightning",
            d: "Thunder"
            },
        correctAnswer: "d"
        },
        {//10
        question: "True of False? In the MCU, Thanos did nothing wrong", 
        answers: {
            a: "True",
            b: "False",
            c: "Why is there an internet meme in my quiz?",
            d: "Seriously, the right answer is based on the internet meme"
            },
        correctAnswer: "a"
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
      stop();
      alert("Time Up!");
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
    var userAnswers = [];
	// for each question... make a new div
  for(var i = 0; i < questionArray; i++){
    var questionContainer = $("<div>");
    $("div").addClass("questionLine"); //add question class for the div

    // add the question to this questionLine div
    $(".questionline").html(questionArray[i].question);

    //make the answerline
    var answerContainer = $("<div>");
    $("div").addClass("answerLine"); //add answer class for the div

    // add the answers to answerLine div
    $(".answerLine").html(questionArray[i].answers);
  }
     
};
buildQuiz();
// make the submit button?
var correct = 0
var incorrect = 0

function chosenAnswer(){
  var input;
  
  //onclick event here onto chosen answer
  if(input === correctAnswer){
    correct++;
  } else{
    incorrect++
  };

}


// how to view the results?
function showResults(){
  $(".questionLine").html("");
  $("answerLine").html("");
  alert("All Done! You got " + correct + " questions right and " + incorrect + " questions wrong.");
  return;
}
// 
// 




