function addition(){
    var num1= 0;
    num1= document.getElementById('num1').value;
    var num2= 0;
    num2= document.getElementById('num2').value;
    var ans1= Number(num1)+Number(num2);
   document.getElementById('ans1').value=ans1;

}
 function subtraction(){
    var sub1= 0;
    sub1= document.getElementById('sub1').value;
    var sub2= 0;
    sub2= document.getElementById('sub2').value;
    var ans2= Number(sub1)-Number(sub2);
    document.getElementById('ans2').value=ans2;
 
 }
 function multiplication(){
    var mul1= 0;
    mul1= document.getElementById('mul1').value;
    var mul2= 0;
    mul2= document.getElementById('mul2').value;
    var ans3= Number(mul1)*Number( mul2);
    document.getElementById('ans3').value=ans3;
  
 
 }
 function division(){
    var div1= 0;
    div1= document.getElementById('div1').value;
    var div2= 0;
    div2= document.getElementById('div2').value;
    var ans4= Number(div1)/Number( div2);
    document.getElementById('ans4').value=ans4;
 }
//operators
//("=" "+" "*")