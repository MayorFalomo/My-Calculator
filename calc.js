const btn = document.querySelectorAll(".btn");

const resultArea = document.querySelector(".result");
const deleteBtn = document.querySelector(".delete-btn");
const resetBtn = document.querySelector(".reset-btn");
const equalsBtn = document.querySelector(".equal-btn");
const operators = document.querySelectorAll(".operatorBtn")

btn.forEach(btn => { // looping through the buttons
    btn.addEventListener("click", () => { // addEventlistener to the buttons
        resultArea.value += Number(btn.textContent) // input the value of the textContent in the result area
    })
})

function clearNumbers() {
    resultArea.value = [] // defining the reset function
}

resetBtn.addEventListener("click", () => {
    clearNumbers() // called the reset function
})



operators.forEach(operator => { // looping through the operator button
    operator.addEventListener("click", () => { // addEventListener to all the operator buttons
        resultArea.value += (operator.textContent) //  input the value of the textContent in the result area
    })
})

equalsBtn.addEventListener("click", () => {
    console.log(calculate())
    document.getElementById("total").innerHTML = calculate() // show the total result in the result area
})

function calculate() {
    let answer = eval(resultArea.value) // define the function Eval here to run all calculations
    return answer;
}

const check = document.querySelector("#check")
const checker = document.querySelector("#checker")
const checks = document.querySelector("#checks")
const numbers = document.querySelectorAll(".btn")


check.addEventListener("click", () => {
    document.getElementById("ball").style.background = "red";
    document.body.style.background = " hsl(222, 26%, 31%)";
    document.getElementById("ball").style.transform = "translateX(0px)";
    document.getElementById("ball").style.transition = "all 1s"
    document.body.style.color = "white"
    document.getElementById("result").style.color = "white"
    document.getElementById("result").style.background = "hsl(223, 31%, 20%)"
    document.getElementById("total").style.background = "hsl(223, 31%, 20%)"
    document.getElementById("total").style.color = "white"
    document.getElementById("calculateArea").style.background = "hsl(223, 31%, 20%)"
    document.getElementById("deleteBtn").style.background = " hsl(225, 21%, 49%)"
    document.getElementById("deleteBtn").style.boxShadow = " hsl(25, 99%, 27%)"
    document.getElementById("equalBtn").style.background = "hsl(176, 100%, 44%))"
    document.getElementById("resetBtn").style.background = "hsl(225, 21%, 49%)"
    document.getElementById("resetBtn").style.boxShadow = "hsl(224, 28%, 35%)"

})

checker.addEventListener("click", () => {
    document.body.style.background = "hsl(0, 0%, 90%)"
    document.getElementById("ball").style.background = "red"
    document.getElementById("ball").style.transform = "translateX(23px)"
    document.getElementById("ball").style.transition = "all 1s"
    document.body.style.color = 'black'
    document.getElementById("result").style.background = "white"
    document.getElementById("result").style.color = "black"
    document.getElementById("total").style.background = "white"
    document.getElementById("total").style.color = "black"
    document.getElementById("calculateArea").style.background = "white"
    document.getElementById("deleteBtn").style.background = " hsl(185, 42%, 37%)"
    document.getElementById("deleteBtn").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    document.getElementById("equalBtn").style.background = " hsl(6, 63%, 50%)"
    document.getElementById("equalBtn").style.color = "white"
    document.getElementById("resetBtn").style.background = " hsl(185, 42%, 37%)"
    document.getElementById("resetBtn").style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
})

checks.addEventListener("click", () => {
    document.body.style.background = "hsl(268, 75%, 9%)";
    document.body.style.color = "(52, 100%, 62%)";
    document.getElementById("ball").style.background = " hsl(176, 100%, 44%)";
    document.getElementById("ball").style.transform = "translateX(46px)";
    document.getElementById("ball").style.transition = "all 1s";
    document.getElementById("result").style.background = "hsl(268, 71%, 12%)";
    document.getElementById("result").style.color = "hsl(52, 100%, 62%)";
    document.getElementById("total").style.background = "hsl(268, 71%, 12%)";
    document.getElementById("total").style.color = "hsl(52, 100%, 62%)";
    document.getElementById("calculateArea").style.background = "hsl(268, 71%, 12%)";
    document.body.style.color = "hsl(52, 100%, 62%)";
    document.querySelector("#deleteBtn").style.background = " hsl(281, 89%, 26%)";
    document.querySelector("#deleteBtn").style.boxShadow = " rgba(188, 21, 244) 0px 3px 8px)";
    document.getElementById("deleteBtn").style.boxShadow = " rgba(188, 21, 244) 0px 3px 8px";
    document.getElementById("resetBtn").style.boxShadow = " rgba(188, 21, 244) 0px 3px 8px";
    document.getElementById("resetBtn").style.background = "  hsl(281, 89%, 26%)";
    document.getElementById("equalBtn").style.background = "  hsl(176, 100%, 44%)";
    document.getElementById("equalBtn").style.color = "black";
    document.getElementById("equalBtn").style.color = "black";
    document.querySelectorAll('.btn').style.background = "hsl(176, 100%, 44%)";
})