//variable declaration and initialization
var passLength;
var lowerArr = ["a", "b", "c", "d", "e","f","g","h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperArr = ["A", "B", "C", "D", "E","F","G","H", "I", "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];;
var specialArr = ["\@","\[","\\","\]","\^","\_","\`","\{","\|","\}","\~","\!", "\"", "\#", "\$","\%","\&","\'","\(","\)","\*","\+","\,","\-","\.","\/","\:","\;","\<","\=","\>","\?"];
var password='';
var passArr;
var lowerCase;
var upperCase;
var numberCase;
var specialCase;

//submit the criteria form values 
function submit_criteria(){
  passLength = !isNaN(document.getElementById('passLength').value)?Number(document.getElementById('passLength').value):0;
  lowerCase = document.getElementById("lowerCase");
  upperCase = document.getElementById("upperCase");
  numberCase = document.getElementById("numberCase");
  specialCase = document.getElementById("specialCase");
  
  //validation
  if(passLength<8 || passLength>128){
    alert("Select a number between 8 and 128");
    return;
  }
  else if(!(lowerCase.checked || upperCase.checked || numberCase.checked || specialCase.checked)){
    alert('Select at least one option');
    return;
  }
  else{
    alert('Submited --> Click on Generate Password.');
  }
}

var generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click" , writePassword);

//write the generated password in the related text box
function writePassword(){
  passArr=[];

  if(lowerCase.checked){
    passArr=passArr.concat(lowerArr);
  }
    
  if(upperCase.checked){
    passArr=passArr.concat(upperArr);
  }
    
  if(numberCase.checked){
    passArr=passArr.concat(numberArr);
  }
    
  if(specialCase.checked){
    passArr=passArr.concat(specialArr);
  }
    
    password="";
    for(i=0 ; i<passLength; i++){
    password = password+ passArr[Math.floor(Math.random()*passArr.length)];
    }
    var passText = document.getElementById("password");
    passText.value= password;

}

//Copy the generated password 
document.getElementById('copyBtn').onclick = function() {
  var copyText = document.getElementById("password");
  copyText.select();

  document.execCommand("copy");

  alert("Password copied!");
  
};


