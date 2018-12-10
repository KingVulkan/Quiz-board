function checkAns(){
  var quesOne=document.querySelector('input[name="question1"]:checked').value;
  var quesTwo=document.querySelector('input[name="question2"]:checked').value;
  var quesThree=document.querySelector('input[name="question3"]:checked').value;
  var quesFour=document.querySelector('input[name="question4"]:checked').value;
  var quesFive=document.querySelector('input[name="question5"]:checked').value;
  var correctScore=0;

  if (quesOne=="b"){
    correctScore+=20
  }
  if (quesTwo=="c"){
    correctScore+=20
  }
  if (quesThree=="b"){
    correctScore+=20
  }
  if (quesFour=="c"){
    correctScore+=20
  }
  if (quesFive=="a"){
    correctScore+=20
  }
  alert(correctScore);
}
