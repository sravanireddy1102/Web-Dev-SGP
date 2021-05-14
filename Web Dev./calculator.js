console.log("Simple calculator");
var result;
while(true){
    const choice=prompt("Enter 1.start 2.stop");
    if(choice==2){
        break;
    }
    else{
        const operator=prompt("Enter operator either +, -, * or / ");
        const input1=parseFloat(prompt("Enter first number"));
        const input2=parseFloat(prompt("Enter second number"));//converting the input string to  float ..
        switch(operator){
            case '+':
                result=input1+input2;
                console.log("${input1}+${input2}=${result}");
                break;
            case '-':
                result=input1-input2;
                console.log("${input1}-${input2}=${result}");
                break;
            case '*':
                result=input1*input2;
                console.log("${input1}*${input2}=${result}");
                break;
            case '/':
                result=input1/input2;
                console.log("${input1}/${input2}=${result}");
                break;
            default:
                console.log("Please choose valid operator");
                break;
        }
    }
}
