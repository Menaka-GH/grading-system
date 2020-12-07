function total()
{
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("math").value);
    var sub3 = parseInt(document.getElementById("sci").value);
    var sub4 = parseInt(document.getElementById("comp").value);
    var sub5 = parseInt(document.getElementById("ss").value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 || sub1 === " " || sub2 === " " || sub3 === ' '){
        alert("Please enter mark <= 100");
    }
    else{
        var total=sub1+sub2+sub3+sub4+sub5;
        document.getElementById("total").innerHTML = "English: "+sub1+ " <br> Maths: "+sub2+ " <br> Science: "+sub3+"<br>Computer: "+sub4+ " <br>  Social science: "+sub5+"<br>------------------------------<br>Total: "+total;
    }
}
function average()
{
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("math").value);
    var sub3 = parseInt(document.getElementById("sci").value);
    var sub4 = parseInt(document.getElementById("comp").value);
    var sub5 = parseInt(document.getElementById("ss").value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 ){
        alert("Please enter mark <= 100");
    }
  else{
    var total=sub1+sub2+sub3+sub4+sub5;
 var ave = total/5;
    document.getElementById("average").innerHTML = "Your Average marks: " +ave;
  }
}
function grade(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("math").value);
    var sub3 = parseInt(document.getElementById("sci").value);
    var sub4 = parseInt(document.getElementById("comp").value);
    var sub5 = parseInt(document.getElementById("ss").value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please enter mark <= 100");
    }
  else{
    var total=sub1+sub2+sub3+sub4+sub5;
    var ave = total/5;
    if(ave>=80 && ave<=100){
        document.getElementById("grade").innerHTML = "Your grade is A";
    }
  else if(ave>=70 && ave<80){
    document.getElementById("grade").innerHTML = "Your grade is B";
}
else if(ave>=65 && ave<70){
    document.getElementById("grade").innerHTML = "Your grade is C";
}
else if(ave>=50 && ave<60){
    document.getElementById("grade").innerHTML = "Your grade is D";
}
else{
    document.getElementById("grade").innerHTML = "You didnot make it"
}
}
}