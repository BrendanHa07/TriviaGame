var questions = [{
	question: "Who's house sigil is" + "</br>" + "<img src='assets/images/greyjoy.png' height='200px' width='200px'>",
	choices: ["<h4 class='correct'>House Greyjoy</h4>","<h4 class='wrong'>House Karstark</h4>","<h4 class='wrong'>House Umber</h4>","<h4 class='wrong'>House Tyrell</h4>"],
	correctAnswer: "House Greyjoy" + "</br>" + "<img src='assets/images/theon.gif'>"
}, {
	question:"What song was played to initiate the Red Wedding?",
	choices:  ["<h4 class='wrong'>The Dornishman's Wife</h4>","<h4 class='correct'>The Rains of Castamere</h4>","<h4 class='wrong'>The Bear and the Maiden Fair</h4>","<h4 class='wrong'>Gentle Mother, Font of Mercy</h4>"],
	correctAnswer: "The Rains of Castamere" + "</br>" + "<img src='assets/images/castamere.gif'>"
}, {
	question:"Valar morghulis is Valyrian for?",
	choices:  ["<h4 class='wrong'>All Men Must Pay</h4>","<h4 class='right'>All Men Must Fight</h4>","<h4 class='correct'>All Men Must Die</h4>","<h4 class='wrong'>All Men Must Serve</h4>"],
	correctAnswer: "All Men Must Die" + "</br>" + "<img src='assets/images/valar.gif'>"
}, {
	question:"Who is Daenerys Targaryen's largest and most vicious dragon?",
	choices:  ["<h4 class='wrong'>Viserion</h4>","<h4 class='wrong'>Rhaegar</h4>","<h4 class='correct'>Drogon</h4>","<h4 class='wrong'>Aegon</h4>"],
	correctAnswer: "Drogon" + "</br>" + "<img src='assets/images/drogon.gif'>"
}, {
	question:"What is the name of the Valyrian steel sword that was given to Jon Snow by Lord Jeor Mormont?",
	choices:  ["<h4 class='wrong'>OathKeeper</h4>","<h4 class='wrong'>Heartsbane</h4>","<h4 class='wrong'>Widow's Wail</h4>","<h4 class='correct'>Longclaw</h4>"],
	correctAnswer: "Longclaw" + "</br>" + "<img src='assets/images/longclaw.gif'>"
}, {
	question:"Who said, " + "'That's what I do. I drink, and know things.' " + "?",
	choices:  ["<h4 class='correct'>Tyrion Lannister</h4>","<h4 class='wrong'>Varys</h4>","<h4 class='wrong'>The Hound</h4>","<h4 class='wrong'>Petry Baelish</h4>"],
	correctAnswer: "Tyrion Lannister" + "</br>" + "<img src='assets/images/tyrion.gif'>"
}, {
	question:"Who goes by the name of Kingslayer?",
	choices:  ["<h4 class='wrong'>Samwell Tarly</h4>","<h4 class='correct'>Jamie Lannister</h4>","<h4 class='wrong'>Oberyn Martell</h4>","<h4 class='wrong'>Ramsey Bolton</h4>"],
	correctAnswer: "Jamie Lannister" + "</br>" + "<img src='assets/images/kingslayer.jpg'>"
}, {
	question:"What is the name of Jon Snow's direwolf?",
	choices:  ["<h4 class='wrong'>Greywind</h4>","<h4 class='wrong'>Nymeria</h4>","<h4 class='correct'>Ghost</h4>","<h4 class='wrong'>Summer</h4>"],
	correctAnswer: "Ghost" + "</br>" + "<img src='assets/images/ghost.gif'>"
}, {
	question:"What did Cersei use to eliminate all her enemies within the Sept of Baelor?",
	choices:  ["<h4 class='wrong'>Napalm</h4>","<h4 class='wrong'>Dark Magic</h4>","<h4 class='correct'>Wildfire</h4>","<h4 class='wrong'>Essence of Nightshade</h4>"],
	correctAnswer: "Wildfire" + "</br>" + "<img src='assets/images/sept.gif'>"
}, {
	question:"Who said, 'You know nothing, Jon Snow' ?",
	choices:  ["<h4 class='wrong'>Sansa Stark</h4>","<h4 class='wrong'>Tyri0n Lannister</h4>","<h4 class='wrong'>Roose Bolton</h4>","<h4 class='correct'>Ygritte</h4>"],
	correctAnswer: "Ygritte" + "</br>" + "<img src='assets/images/ygritte.gif'>"
}];


var number = 30;
var questionCounter = 0;
var wrongCount = 0;
var correctCount = 0;
var setInterval;



$(document).ready(function(){

	$("#start").on("click", playGame);
    $("#start").on("click", run);


          function playGame(){
          	$("#results").empty();
            $("#start").hide(); 
            $("#answer").empty(); 
            if (questionCounter > 9) {
            	$("#timer").html("<h4>Game Over</h>");
          		$("#results").html("<h2> You got " + correctCount + " questions correct!");
          		return;   
          	}       
            choice();
            $(".wrong").on("click", WC);
            $(".correct").on("click", RC);
    		$("#timer").html("<h4>Time remaining: " + number + "</h4>");
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
            $("#results").html("<h2>You are wrong!</h2>");
          }

          function RC(){
            correctCount++; 
            answerPage();
            $("#results").html("<h2>You are correct!</h2>")
          }          

          function answerPage(){
          	$("#question").empty();
            $("#choice").empty();
            $("#timer").empty();
            $("#answer").html("<h4>Correct Answer:</h4>" + questions[questionCounter].correctAnswer);
            questionCounter++;
            stop();

            number = 30;   
            setTimeout(playGame,3000);
            setTimeout(run,3000);
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
            if (number === -1) { 
              answerPage();
              }
            else if (questionCounter > 9) {
              $("#question").empty();
              stop();
            }              
          }


			
});