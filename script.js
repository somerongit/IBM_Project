function compute() {
    //Get the values and calculate 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("formControlRange").value);
    var years = parseInt(document.getElementById("exampleFormControlSelect1").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
    //Create the Interest text
    document.getElementById("result").innerHTML = "<br><h4>Interest : If you deposit <mark>" + principal + "</mark>,<br/><br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/><br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/><br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark></h4>";

}

//update ther ate value
function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("formControlRange").value;
}

//Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
