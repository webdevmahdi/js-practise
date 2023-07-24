let i = 0;
setInterval(myFunc, 3500);
function myFunc(){
    console.log('Mahdi', i++);
}
let input = prompt('type a number');
let inputNum = parseInt(input);
if(input > 5){
    let result = 200 + inputNum;
    alert(result)
}