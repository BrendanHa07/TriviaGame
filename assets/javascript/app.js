var questions = [{
	question: "Who's house sigil is" + "<img src='assets/images/greyjoy.png' height='200px' width='200px'>" + "?",
	choices: ["<h4 class='correct'>House Greyjoy</h4>","<h4 class='wrong'>House Karstark</h4>","<h4 class='wrong'>House Umber</h4>","<h4 class='wrong'>House Tyrell</h4>"],
	correctAnswer: "House Greyjoy"
}, {
	question:"What song was played to initiate the Red Wedding?",
	choices:  ["<h4 class='wrong'>The Dornishman's Wife</h4>","<h4 class='correct'>The Rains of Castamere</h4>","<h4 class='wrong'>The Bear and the Maiden Fair</h4>","<h4 class='wrong'>Gentle Mother, Font of Mercy</h4>"],
	correctAnswer: "The Rains of Castamere"
}, {
	question:"Valar morghulis is Valarian for?",
	choices:  ["<h4 class='wrong'>All Men Must Pay</h4>","<h4 class='right'>All Men Must Fight</h4>","<h4 class='correct'>All Men Must Die</h4>","<h4 class='wrong'>All Men Must Serve</h4>"],
	correctAnswer: "All Men Must Die"
}, {
	question:"Who is Daenerys Targaryen's largest and most vicious dragon?",
	choices:  ["<h4 class='wrong'>Viserion</h4>","<h4 class='wrong'>Rhaegar</h4>","<h4 class='correct'>Drogon</h4>","<h4 class='wrong'>Aegon</h4>"],
	correctAnswer: "Drogon"
}, {
	question:"What is the name of the Valyrian steel sword that was given to John Snow by Lord Jeor Mormont after he retired from his lordship?",
	choices:  ["<h4 class='wrong'>OathKeeper</h4>","<h4 class='wrong'>Heartsbane</h4>","<h4 class='wrong'>Widow's Wail</h4>","<h4 class='correct'>Longclaw</h4>"],
	correctAnswer: "Longclaw"
}, {
	question:"Who said,'That's what I do. I drink, and I know things'?"
	choices:  ["<h4 class='correct'>Tyrion Lannister</h4>","<h4 class='wrong'>Varys</h4>","<h4 class='wrong'>The Hound</h4>","<h4 class='wrong'>Petry Baelish</h4>"],
	correctAnswer: "6B"
}, {
	question:"How many Stark children are there?",
	choices:  ["<h4 class='wrong'>3</h4>","<h4 class='correct'>5</h4>","<h4 class='wrong'>8</h4>","<h4 class='wrong'>4</h4>"],
	correctAnswer: "5"
}, {
	question:"What is the name of John Snow's direworlf?",
	choices:  ["<h4 class='wrong'>Greywind</h4>","<h4 class='wrong'>Nymeria</h4>","<h4 class='correct'>Ghost</h4>","<h4 class='wrong'>Summer</h4>"],
	correctAnswer: "Ghost"
}, {
	question:"This is from the Battle of Blackwater Bay. What caused this" + "<img src='assets/images/wildfire.jpg>'" + "?",
	choices:  ["<h4 class='wrong'>Napalm</h4>","<h4 class='wrong'>Dark Magic</h4>","<h4 class='correct'>Wildfire</h4>","<h4 class='wrong'>Essence of Nightshade</h4>"],
	correctAnswer: "Wildfire"
}, {
	question:"Who said, 'You know nothing, John Snow' ?",
	choices:  ["<h4 class='wrong'>Sansa Stark</h4>","<h4 class='wrong'>Tryioan Lannister</h4>","<h4 class='wrong'>Roose Bolton</h4>","<h4 class='correct'>Ygritte</h4>"],
	correctAnswer: "Ygritte"
}];


var number = 3;
var questionCounter = 0;
var wrongCount = 0;
var correctCount = 0;

var setInterval;

$(document).ready(function(){

	$("#start").on("click", playGame);
    $("#start").on("click", run);


          function playGame(){
            $("#start").hide(); 
            $("#answer").empty(); 

            if (questionCounter > 9) {
          		console.log("Game Over");
          		return;   
          	}       
            choice();
            $(".wrong").on("click", WC);
            $(".correct").on("click", RC);

    				$("#timer").html("<h4>Time remaining: " + number + "</h4.");
    		
          	
    				$("#question").html("<h4>Question: </h4>" + questions[questionCounter].question);
          }

          function choice(){


            $("#choice").append("<li>" + questions[questionCounter].choices[0] + "</li>");
            $("#choice").append("<li>" + questions[questionCounter].choices[1] + "</li>");              
            $("#choice").append("<li>" + questions[questionCounter].choices[2] + "</li>");              
            $("#choice").append("<li>" + questions[questionCounter].choices[3] + "</li>");              
          }

          function WC(){
            wrongCount++;
            answerPage();
          }

          function RC(){
            correctCount++;  
            answerPage();
          }          

          function answerPage(){
            $("#choice").empty();
            $("#answer").html("<h4>Correct Answer:</h4>" + questions[questionCounter].correctAnswer);
            $("#timer").html("Answer!!!!!!!!!!!!!");
               questionCounter++;
            stop();

            number = 10;   
            setTimeout(playGame,1500);
            setTimeout(run,1500);
          }
          function run() {
            intervalId = setInterval(decrement, 1000);
          }

          function stop() {
            clearInterval(intervalId);
          }
          function decrement() {
            number--;
            $("#timer").html("<h4>Time remaining: " + number + "</h4.")
      
            if (number === 0) {         
              answerPage();
              }
            else if (questionCounter === 10) {
              stop();
              $("#timer").html("<h4>Time is Up!!! </h>");
              $("#question").empty();
            }              
          }


			
});