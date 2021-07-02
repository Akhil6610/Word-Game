var player1=localStorage.getItem("player1_name");
var player2=localStorage.getItem("player2_name");
document.getElementById("Player1").innerHTML=player1;
document.getElementById("Player2").innerHTML=player2;
var player1_score=0;
var player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_Question").innerHTML="Question Turn: "+player1;
document.getElementById("player_Answer").innerHTML="Answer Turn: "+player2;
function Send(){
    word=document.getElementById("word").value;
    new_word=word.toLowerCase();
 char1=new_word.charAt(1);
    length2=Math.floor(new_word.length/2);
    char2=new_word.charAt(length2);
    lenghtminus1=new_word.lenght-1;
    char3=new_word.charAt(lenghtminus1);
     remove_char1=new_word.replace (char1,"_");
     remove_char2=remove_char1.replace(char2,"_");
     remove_char3=remove_char2.replace(char3,"_");
     question_word="<h4 id='word_display'>Q. "+remove_char3+"</h4>";
     inputbox="<br>Answer: <input type='text' id='inputbox'>";
     checkbutton="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
     row=question_word+inputbox+checkbutton;
     document.getElementById("output").innerHTML=row;
     document.getElementById("word").innerHTML="";
    }
    question_turn="player1";
    answer_turn="player2";
    function check(){
    get_answer=document.getElementById("inputbox").value;
    answer=get_answer.toLowerCase();
if(answer==new_word){
    if(answer_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}
if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_Question").innerHTML="question_turn - " +player2;
}
else{
    question_turn="player1";
    document.getElementById("player_Question").innerHTML="question_turn - " +player1;  
}
if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_Answer").innerHTML="answer_turn - " +player2;
}
else{
    answer_turn="player1";
    document.getElementById("player_Answer").innerHTML="answer_turn - " +player1;  
}
document.getElementById("output").innerHTML="";
    }
        