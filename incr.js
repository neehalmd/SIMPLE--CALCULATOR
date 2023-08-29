
let val=0;
document.getElementById("btn").onclick = function(){
    console.log("button is pressed")
    val+=1;
    document.getElementById("num1").innerHTML=val;
}
document.getElementById("btn1").onclick = function(){
    console.log("Reset btn is pressed")
    val=0;
    document.getElementById("num1").innerHTML=val;
}
document.getElementById("btn2").onclick = function() {
    
    console.log("Decrementer is clicked")
    if( document.getElementById("num1").innerHTML>0){
        val=val-1;
    
    document.getElementById("num1").innerHTML=val;
    }
    else
        document.getElementById("num1").innerHTML="ERROR";
    
}
let value=0;
document.getElementById("btn3").onclick = function(){
    console.log("button is pressed")
    value+=1;
    document.getElementById("num2").innerHTML=value;
}
document.getElementById("btn4").onclick = function(){
    console.log("Reset btn is pressed")
    value=0;
    document.getElementById("num2").innerHTML=value;
}
document.getElementById("btn5").onclick = function() {
    
    console.log("Decrementer is clicked")
    if( document.getElementById("num2").innerHTML>0){
        value=value-1;
    
    document.getElementById("num2").innerHTML=value;
    }
    else
        document.getElementById("num2").innerHTML="ERROR";
    
}

let result;


document.getElementById("finbtn").onclick = function(){
    
     if(add1.checked){
        
        
        document.getElementById("ans").innerHTML=val+value;

    }
    else if(sub1.checked){
        document.getElementById("ans").innerHTML=val-value;

    }
    else if(mul1.checked){
        document.getElementById("ans").innerHTML=val*value;
    }
    else if(div1.checked){
        
        document.getElementById("ans").innerHTML=val/value;
    }
    else{
        document.getElementById("ans").innerHTML="PICK A OPTION"
    }
}
