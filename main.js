x = 0;
y = 0;
selecr_value="apple"
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function select_done(){
  selecr_value= document.getElementById("types").value
  if(selecr_value=="apple"){
    document.getElementById("what_select").innerHTML="Apple are show (max-10)"
  }else if(selecr_value=="counting"){
    document.getElementById("what_select").innerHTML="Counting (max-5)"
  }
  background("pink")
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
if(content==1 || content==2 || content==3|| content==4|| content==5 ||content==6|| content==7|| content==8|| content==9|| content==10 ){
draw_apple="Set"
to_number=content
console.log(draw_apple,to_number)
}
}
function preload(){
apple= loadImage("apple.png")
one=loadImage("1.png")
two=loadImage("2.png")
three=loadImage("3.png")
four=loadImage("4.png")
five=loadImage("5.png")
}
function setup() {
 canvas= createCanvas(500,500)
}

function draw() {
  
  if(draw_apple == "Set" && selecr_value=="apple")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
   
    
for(var i = 1;i<=to_number;i++){
  randome_number_x=Math.floor((Math.random()*240))
  randome_number_y=Math.floor((Math.random()*240))
  image(apple,randome_number_x,randome_number_y,50,50)
  
}

    draw_apple=""
  }else if(selecr_value=="counting" && to_number==1){
  
      randome_number_x=Math.floor((Math.random()*450))
      randome_number_y=Math.floor((Math.random()*450))
      image(one,randome_number_x,randome_number_y,100,50)
      to_number=""
    
  }else if(selecr_value=="counting" && to_number==2){
  
    randome_number_x=Math.floor((Math.random()*450))
    randome_number_y=Math.floor((Math.random()*450))
    image(two,randome_number_x,randome_number_y,100,50)
    to_number=""
  
}else if(selecr_value=="counting" && to_number==3){
  
  randome_number_x=Math.floor((Math.random()*450))
  randome_number_y=Math.floor((Math.random()*450))
  image(three,randome_number_x,randome_number_y,100,50)
  to_number=""

}else if(selecr_value=="counting" && to_number==4){
  
  randome_number_x=Math.floor((Math.random()*450))
  randome_number_y=Math.floor((Math.random()*450))
  image(four,randome_number_x,randome_number_y,100,50)
  to_number=""

}else if(selecr_value=="counting" && to_number==5){
  
  randome_number_x=Math.floor((Math.random()*450))
  randome_number_y=Math.floor((Math.random()*450))
  image(five,randome_number_x,randome_number_y,100,50)
  to_number=""

}

}
function clear12(){
  background("pink")

}
function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
