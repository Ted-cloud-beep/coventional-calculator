const cancel=document.querySelector('.cancel');
const display=document.querySelector('.display');
const multiply=document.querySelector('.multiply');
const division=document.querySelector('.division');
const subtract=document.querySelector('.subtract');
const plus=document.querySelector('.plus');
const decimal=document.querySelector('.decimal');
const nine=document.querySelector('.nine');
const eight=document.querySelector('.eight');
const seven=document.querySelector('.seven');
const six=document.querySelector('.six');
const five=document.querySelector('.five');
const four=document.querySelector('.four');
const three=document.querySelector('.three');
const two=document.querySelector('.two');
const one=document.querySelector('.one');
const zero=document.querySelector('.zero');
const equal=document.querySelector('.equal');
const mul='*';
const div='/';
const add='+';
const sub='-';
const o=1;
const tw=2;
const th=3;
const fo=4;
const fi=5;
const si=6;
const se=7;
const ei=8;
const ni=9;
const ze=0;
const dec='.';
let ans;
let saveScreen;
const input=element=>{
  if(display.innerHTML==='0'){
    display.innerHTML=`${element}`;
  }
  else{
    display.innerHTML+=`${element}`;
  }

  saveScreen=display.innerHTML;
  console.log(saveScreen)

}
const result=()=>{
  if(display.innerHTML==='0'){
    return 
  }
  ans=eval(saveScreen);
  display.innerHTML=ans;
}
const cleaningDisplay=()=>{
  display.innerHTML=0;
}

cancel.addEventListener('click',cleaningDisplay);
multiply.addEventListener('click',input.bind(null,mul));
subtract.addEventListener('click',input.bind(null,sub ));
plus.addEventListener('click',input.bind(null,add));
division.addEventListener('click',input.bind(null,div));
decimal.addEventListener('click',input.bind(null,dec));
nine.addEventListener('click',input.bind(null,ni));
eight.addEventListener('click',input.bind(null,ei));
seven.addEventListener('click',input.bind(null,se));
six.addEventListener('click',input.bind(null,si));
five.addEventListener('click',input.bind(null,fi));
four.addEventListener('click',input.bind(null,fo));
three.addEventListener('click',input.bind(null,th));
two.addEventListener('click',input.bind(null,tw));
one.addEventListener('click',input.bind(null,o));
zero.addEventListener('click',input.bind(null,ze));
equal.addEventListener('click',result);
