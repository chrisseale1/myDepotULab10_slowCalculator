document.addEventListener('DOMContentLoaded',function() {
document.getElementById("add").addEventListener('click', add);
function add(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var DOM_img = document.createElement("img");
    DOM_img.src = "http://www.inspirednationonline.com/wp-content/uploads/2016/04/wait-1.png";    
    document.body.appendChild(DOM_img);
    davidsLib.add(num1, num2, function(err, result){
        document.body.removeChild(DOM_img);    // here you can hide the indication
   	    if (err) {
            console.log ("is this thing on?");
            alert ("An error has occurred. Try again.");
        }else{
            alert("The sum is " + result);
        }
    })
}

document.getElementById("subtract").addEventListener('click', subtract);
function subtract(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var DOM_img = document.createElement("img");
    DOM_img.src = "http://www.inspirednationonline.com/wp-content/uploads/2016/04/wait-1.png";    
    document.body.appendChild(DOM_img);
    davidsLib.subtract(num1, num2, function(err, result) {
        document.body.removeChild(DOM_img); 
        if (err) {
            alert ("An error has occurred. Try again.");
        } else {
            alert("The difference is " + result);
        }
    })
}

document.getElementById("multiply").addEventListener('click', multiply);
function multiply() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var DOM_img = document.createElement("img");
    DOM_img.src = "http://www.inspirednationonline.com/wp-content/uploads/2016/04/wait-1.png";    
    document.body.appendChild(DOM_img);
    davidsLib.multiply(num1, num2, function(err, result) {
        document.body.removeChild(DOM_img); 
        if (err) {
            alert ("An error has occurred. Try again.");
        } else {
            alert("The quotient is " + result);
        }
    })
}

document.getElementById("divide").addEventListener('click', divide);
function divide() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var DOM_img = document.createElement("img");
    DOM_img.src = "http://www.inspirednationonline.com/wp-content/uploads/2016/04/wait-1.png";    
    document.body.appendChild(DOM_img);
    davidsLib.divide(num1, num2, function(err, result) {
        document.body.removeChild(DOM_img); 
        if (err) {
            alert("An error has occurred. Try again.");
        } else {
            alert("The dividend is " + result);
        }
    })

}
});