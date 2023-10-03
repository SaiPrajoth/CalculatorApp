let clearBtn = document.getElementById("clear-btn")
let inputEl = document.getElementById("input-item")
const resultBtn = document.getElementById("result-btn")
let OneButton = document.getElementById("btn1")
let TwoButton = document.getElementById("btn2")
let ThreeButton = document.getElementById("btn3")
let FourButton = document.getElementById("btn4")
let FiveButton = document.getElementById("btn5")
let SixButton = document.getElementById("btn6")
let SevenButton = document.getElementById("btn7")
let EightButton = document.getElementById("btn8")
let NineButton = document.getElementById("btn9")
let ZeroButton = document.getElementById("btn10")
let PlusButton = document.getElementById("plus-btn")
let MinusButton = document.getElementById("minus-btn")
let MultiplyButton = document.getElementById("multiply-btn")
let DivideButton = document.getElementById("divide-btn")
let PointButton = document.getElementById("btn11")
let clearOneButton = document.getElementById("btn12")
let resultButton = document.getElementById("result-btn");
inputEl.value = ""
let pointAdded = false
let result=0;
let resultUpdated=false
let answer = 0.21
let RemoveSymbol=true
clearBtn.addEventListener("click", function () {
    inputEl.value = ""
    pointAdded=false
})
clearOneButton.addEventListener("click",function(){
    if(inputEl.value=="Enter valid calculation" || inputEl.value=="ERROR"){
        inputEl.value=""
    }else if(inputEl.value.charAt(inputEl.value.length-1==".")){
        pointAdded=false;
    }
    inputEl.value = inputEl.value.slice(0,-1);
})

OneButton.addEventListener("click", function () {
    if(inputEl.value=="Enter valid calculation" || inputEl.value=="ERROR"){
        inputEl.value="1"
    }else{
        inputEl.value+="1"
    }
    
})
TwoButton.addEventListener("click", function () {
    if(inputEl.value=="Enter valid calculation" || inputEl.value=="ERROR"){
        inputEl.value="2"
    }else{
        inputEl.value+="2"
    }
})
ThreeButton.addEventListener("click", function () {
    if(inputEl.value=="Enter valid calculation" || inputEl.value=="ERROR"){
        inputEl.value="3"
    }else{
        inputEl.value+="3"
    }
})
FourButton.addEventListener("click", function () {
    if(inputEl.value=="Enter valid calculation" || inputEl.value=="ERROR"){
        inputEl.value="4"
    }else{
        inputEl.value+="4"
    }
})
FiveButton.addEventListener("click", function () {
    if(inputEl.value=="Enter valid calculation" || inputEl.value=="ERROR"){
        inputEl.value="5"
    }else{
        inputEl.value+="5"
    }
})
SixButton.addEventListener("click", function () {
    if(inputEl.value=="Enter valid calculation" || inputEl.value=="ERROR"){
        inputEl.value="6"
    }else{
        inputEl.value+="6"
    }
})
SevenButton.addEventListener("click", function () {
    if(inputEl.value=="Enter valid calculation" || inputEl.value=="ERROR"){
        inputEl.value="7"
    }else{
        inputEl.value+="7"
    }
})
EightButton.addEventListener("click", function () {
    if(inputEl.value=="Enter valid calculation" || inputEl.value=="ERROR"){
        inputEl.value="8"
    }else{
        inputEl.value+="8"
    }
})
NineButton.addEventListener("click", function () {
    if(inputEl.value=="Enter valid calculation" || inputEl.value=="ERROR"){
        inputEl.value="9"
    }else{
        inputEl.value+="9"
    }
})
ZeroButton.addEventListener("click", function () {
    if(inputEl.value=="Enter valid calculation" || inputEl.value=="ERROR"){
        inputEl.value="0"
    }else{
        inputEl.value+="0"
    }
})
PlusButton.addEventListener("click", function(){
    let x=""
    if(inputEl.value.length>0){
        x=inputEl.value.charAt(inputEl.value.length-1);
    }
    if(x=='+' || x=='-' || x=='*' || x=='/' || x=='.'){
        inputEl.value = inputEl.value.slice(0,-1);
        inputEl.value+="+";
    }else{
        inputEl.value+="+";
    }
    pointAdded=false;
})
MinusButton.addEventListener("click", function(){
    let x=""
    if(inputEl.value.length>0){
        x=inputEl.value.charAt(inputEl.value.length-1);
    }
    if(x=='+' || x=='-' || x=='*' || x=='/' || x=='.'){
        inputEl.value = inputEl.value.slice(0,-1);
        inputEl.value+="-";
    }else{
        inputEl.value+="-";
    }
    pointAdded=false;
})
MultiplyButton.addEventListener("click", function(){
    let x=""
    if(inputEl.value.length>0){
        x=inputEl.value.charAt(inputEl.value.length-1);
    }
    if(x=='+' || x=='-' || x=='*' || x=='/' || x=='.'){
        if(inputEl.value.length>1){
        inputEl.value = inputEl.value.slice(0,-1);
        inputEl.value+="*";
        }
    }else if(x!="" ){
        inputEl.value+="*";
    }
    pointAdded=false;
})
DivideButton.addEventListener("click", function(){
    let x=""
    if(inputEl.value.length>0){
        x=inputEl.value.charAt(inputEl.value.length-1);
    }
    if(x=='+' || x=='-' || x=='*' || x=='/' || x=='.'){
        if(inputEl.value.length>1){
            inputEl.value = inputEl.value.slice(0,-1);
            inputEl.value+="/";
            }
    }else if(x!=""){
        inputEl.value+="/";
    }
    pointAdded=false;
})
PointButton.addEventListener("click", function(){
    let x=""
    if(inputEl.value.length>0){
        x=inputEl.value.charAt(inputEl.value.length-1);
    }
    if(x!='+' && x!='-' && x!='*' && x!='/' && x!='.' && x!="" && pointAdded==false && inputEl.value!="Enter valid calculation" && inputEl.value!="ERROR"){
        inputEl.value+=".";
        pointAdded=true;
    }
})
resultBtn.addEventListener("click",function(){
    // if(inputEl.value=="")
    if((""+parseFloat(inputEl.value)+"")=="NaN"){
        inputEl.value="Enter valid calculation"
    }else{
    const cars= []
    let content = inputEl.value
    let i =0
    while((""+parseFloat(content)+"")!="NaN"){
        cars[i]=(parseFloat(content)).toString()
        content=content.replace(cars[i],"")
        i++;
        if(content.charAt(0)=="-"){
            cars[i]="+";
            RemoveSymbol=false  
        }else if(content.charAt(0)=="+"){
            cars[i]="+";
            RemoveSymbol=true
        }else if(content.charAt(0)=="*"){
            cars[i]="*";
            RemoveSymbol=true
        }else if(content.charAt(0)=="/"){
            cars[i]="/";
            RemoveSymbol=true
        }
        
        if(RemoveSymbol==true){
            content = content.slice(1)
        }        
        
        i++;
    }
   

    for(let j=0;j<cars.length;j++){
        if(cars[j]=="/"){
            answer=(parseFloat(cars[j-1])/parseFloat(cars[j+1]))
            // calculate the (i-1) and (i+1) element cars[i-1]/cars(i+1)
            // remove the i-1 and i+1 element and replace the ith element with the answer
            cars.splice(j,2)// remove i and i+1 element
            cars[j-1]=""+answer+"";
            j--
        }
    }
    for(let j=0;j<cars.length;j++){
        if(cars[j]=="*"){
            answer=(parseFloat(cars[j-1])*parseFloat(cars[j+1]))
            // calculate the (i-1) and (i+1) element cars[i-1]/cars(i+1)
            // remove the i-1 and i+1 element and replace the ith element with the answer
            cars.splice(j,2)// remove i and i+1 element
            cars[j-1]=""+answer+"";
            j--
        }
    }
    
    for(let j=0;j<cars.length;j++){
        if(cars[j]=="+"){
            answer=(parseFloat(cars[j-1])+parseFloat(cars[j+1]))
            // calculate the (i-1) and (i+1) element cars[i-1]/cars(i+1)
            // remove the i-1 and i+1 element and replace the ith element with the answer
            cars.splice(j,2)// remove i and i+1 element
            cars[j-1]=""+answer+"";
            j--
        }
    }
    if(cars[0]=="NaN"){
        cars[0]="ERROR"
    }
    inputEl.value = cars[0];
    }
    
    
    // const cars = [];
    // let i =0;
    // let content = inputEl.value;
    // while(((""+parseFloat(content)+"")!="NaN") ){
    //     cars.charAt(i)=(str)(parseFloat(content))
    //     content=content.replace(cars.charAt(i),"");
    //     i++;
    //     if(content.charAt(0)=="-"){
    //         cars.charAt(i)="+";
    //     }else{
    //         cars.charAt(i)=content.charAt(0)
    //     }
    // }
    // for(let i=0;i<cars.length;i++){
    //     let ans=0
    //     if(cars.charAt(i)=="/"){
    //        ans = parseFloat(cars.charAt(i-1))/parseFloat(cars.charAt(i+1))
    //        cars.splice(i,2)// remove i and i+1 element
    //        cars.replace(cars.charAt(i-1),""+ans+"")// replace i-1 the element with ans
    //     }
    // }
    // for(let i=0;i<cars.length;i++){
    //     let ans=0
    //     if(cars.charAt(i)=="*"){
    //        ans = parseFloat(cars.charAt(i-1))*parseFloat(cars.charAt(i+1))
    //        cars.splice(i,2)// remove i and i+1 element
    //        cars.replace(cars.charAt(i-1),""+ans+"")// replace i-1 the element with ans
    //     }
    // }
    // for(let i=0;i<cars.length;i++){
    //     let ans=0
    //     if(cars.charAt(i)=="+"){
    //        ans = parseFloat(cars.charAt(i-1))-parseFloat(cars.charAt(i+1))
    //        cars.splice(i,2)// remove i and i+1 element
    //        cars.replace(cars.charAt(i-1),""+ans+"")// replace i-1 the element with ans
    //     }
    // }

    // inputEl.value = cars[0];





    // // if(resultUpdated==false)
    // if(( inputEl.value!="ADD THE CALCULATION"&& inputEl.value!="ERROR" ))
    // {
    //     let x=""
    //     let denom = 0;
    //     let prev_denom=0;
    //     let display = "";
    //     let result = 0;
    //     let content = inputEl.value;
    //     let array = [];
    //     if(content.length>0){ 
    //         x=content.charAt(content.length-1);
    //     }
    //     if(x=='+' || x=='-' || x=='*' || x=='/' || x=='.'){
    //        display="ERROR";
    //     }else if(x==""){
    //         display="ADD THE CALCULATION";
    //     }else{
    //         let i =0;
    //         result=parseFloat(content);
    //         content = content.replace(""+result+"","");

    //         while((""+parseFloat(content)+"")!="NaN"){
    //             // array.push(""+denom+"")
    //             // prev_denom=denom;
                
    //             denom=parseFloat(content);
                
    //             if(content.charAt(0)=="+"){
    //                 result=result+denom;
    //             }else if(content.charAt(0)=="-"){
    //                 result=result+denom;
    //             }else if(content.charAt(0)=="*"){
    //                 // denom=parseFloat(content);
    //                 // result=result+prev_denom*denom;
    //             }else{
    //                 // denom=parseFloat(content);
    //                 // result=result+prev_denom/denom;
    //             }
    //             // array.push(""+content.charAt(i)+"");
    //             i++;
    //             content=content.replace(""+denom+"","")
    //             if(content.charAt(1)=='+' || content.charAt(1)=='-' || content.charAt(1)=='*' || content.charAt(1)=='/'){
    //                 content = content.replace(""+content.charAt(0)+"","");
    //             }
                
    //         }
    //         let x = ""+parseFloat(content)+""
    //         display=""+result+"";
    //     }
       
    //     inputEl.value = display;

    //     resultUpdated=true
        
    // }
    // // else{
    // //     console.log("Enter the new value")
    // // }


    

    // let x=""
    // let denom = 0;
    // let prev_denom=0;
    // let display = "";
    // let result = 0.00;
    // let content = inputEl.value;
    // let array = [];
    // if(content.length>0){ 
    //     x=content.charAt(content.length-1);
    // }
    // if(x=='+' || x=='-' || x=='*' || x=='/' || x=='.'){
    //    display="ERROR";
    // }else if(x==""){
    //     display="ADD THE CALCULATION";
    // }else{
    //     while((""+parseFloat(content)+"")!="NaN"){
    //         denom = parseFloat(content);
    //         prev_denom=denom;
    //         content = content.replace(""+denom+"","");
    //         if(content.charAt(0)=="+"){
    //             result=result+denom;
    //         }else if(content.charAt(0)=="-"){
    //             result=result-denom;
    //         }else if(content.charAt(0)=="*"){
    //             denom=parseFloat(content);
    //             result=result+prev_denom*denom;
    //         }else{
    //             denom=parseFloat(content);
    //             result=result+prev_denom/denom;
    //         }
    //     }
    //     display=""+result+"";
    // }
   
    // inputEl.value = display;
    
})