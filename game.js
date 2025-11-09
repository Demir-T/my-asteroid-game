function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

// Question 1
function doStay() {
    alert("Maybe you are just dreaming");
    hide("question1");
    show("question2");
}

function doGoOutside() {
    alert("Alright let's go");
    hide("question1");
    show("question7");
}

// Question 2
function doStayAgain() {
    alert("Maybe you are just dreaming again!?");
    hide("question2");
    show("question3");
}

function doGoCheck() {
    alert("I hope it isn't something dangerous");
    hide("question2");
    show("question4");
}

// Question 3
function doGoBack() {
    alert("Try again");
    hide("question3");
    show("question1");
}

// Question 4
function doAskHimIfHeNeedsHelp() {
    alert("Let's see if he needs help");
    hide("question4");
    show("question5");
}

function doBreakTheMachine() {
    alert("Maybe he is doing something dangerous");
    hide("question4");
    show("question6");
}

// Question 5
function doGoBackToStart() {
    alert("Try again");
    hide("question5");
    show("question1");
}

// Question 6
function doBackToStart() {
    alert("Try again");
    hide("question6");
    show("question1");
}

// Question 7
function doOpenTheMachine() {
    alert("I hope it isn't something bad");
    hide("question7");
    show("question8");
}

function doBreakTheMachineWithoutChecking() {
    alert("Maybe it is something dangerous");
    hide("question7");
    show("question6");
}

// Question 8
function doNegativeFiftyMillion() {
    alert("I hope it isn't something dangerous");
    hide("question8");
    show("question9");
}

function doNineteenNinetyfour() {
    alert("I hope it isn't something dangerous");
    hide("question8");
    show("question10");
}

function doTwothousandSevenhundred() {
    alert("I hope it isn't something dangerous");
    hide("question8");
    show("question11");
}

function doSecretButtonD() {
    alert("I hope it isn't something dangerous");
    hide("question8");
    show("question12");
}

// Question 9
function doGoToTheStart() {
    alert("Try Again");
    hide("question9");
    show("question1");
}

// Question 10
function doBackToTheStart() {
    alert("Try Again");
    hide("question10");
    show("question1");
}

// Question 11
function doBackToTheFirstQuestion() {
    alert("Try Again");
    hide("question11");
    show("question1");
}

// Question 12
function doGoBackToTheFirstQuestion() {
    alert("Try Again");
    hide("question12");
    show("question1");
}
