//add evenListeners
document.getElementById("add").addEventListener("click", add);  

//function to add
function add(){
    var number1 = document.getElementById("number").value;
    var number2 = document.getElementById("number2").value; 
   

//escape the comma and change string to float
    var num3 = parseFloat(number1.split(",").join(""));
    var num4 = parseFloat(number2.split(",").join(""));
    
    
    let total = num3 + num4;
    document.getElementById("output").value = total;


}



