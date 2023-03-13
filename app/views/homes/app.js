let hello = -30.45
alert(hello);
alert(4*7);
alert('Hello'+'World')

let orange = 100;
let apple = 200;
if(orange < apple){
  alert('orange');
} else if(orange == apple){
  alert('equal');
} else{
  alert('apple');
}

let max = 1
let min = 1
let count = 0

do{
  count = count + 1;
}
while(min < max){
  min = min * 2;
  count = count + 1;
}

alert(count+"times");

let i;
let num = 0;

for(i=1; i <11; i++){
  num = num + i;
}
alert(num+'times');