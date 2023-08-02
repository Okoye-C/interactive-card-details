//second ATM card values
const cardHolderName2 = document.getElementById("cardHolderName2");
const cardNumber2 = document.getElementById("cardNumber2");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const CVC1 = document.getElementById("CVC1");


//first ATM card values
const cardHolderName1 = document.getElementById("cardHolderName1");
const cardNumber1 = document.getElementById("cardNumber1");
const month = document.getElementById("month");
const year = document.getElementById("year");
const CVC = document.getElementById("CVC");
const form = document.getElementById("form");
const Button = document.getElementById("button");


//Displaying input on second card
cardHolderName1.addEventListener("input", inputName);
function inputName(){
    window.regex = /[^\D]/g; 
    let Name = cardHolderName1.value.replace(window.regex, "");
    cardHolderName1.value = Name;
    cardHolderName2.innerHTML = cardHolderName1.value;
    if (cardHolderName2.innerHTML === ""){
        window.showname = "JANE APPLESEED";
        cardHolderName2.innerHTML = window.showname;
    }
}
inputName();

cardNumber1.addEventListener('input', inputNum);
    function inputNum(){
    //Creating a regex that accepts only numbers
    let regex = /[^0-9]/g;

    //Adding the regex to make input only numbers
    let onlyNum = cardNumber1.value.replace(regex, "");
    
    //Creating sections after 4 numbers
    let sectioning = onlyNum.match(/\d{1,4}/g);
    
    //Replacing commas(",") with spaces(" ")
    if(sectioning !== null){
        onlyNum = sectioning.join(" ");
    }
    
    //casting formatted number to cardNumber1 value
    cardNumber1.value = onlyNum;
    
    //casting cardNumber1 to cardNumber2
    cardNumber2.innerHTML = cardNumber1.value;

    //making Cardnumber2 value display Placeholder
    if(cardNumber1.value === ""){
        window.number = "0000 0000 0000 0000";
        cardNumber2.innerHTML = window.number;
    }

}
inputNum();

month.addEventListener("input", inputMonth);
function inputMonth(){
    let regex = /[^0-9]/g;
    let MonthNum = month.value.replace(regex, "");
    month.value = MonthNum;
    dateMonth.textContent= month.value;
    if(MonthNum === ""){
        window.months = "00";
        dateMonth.innerHTML = window.months;
    }
}
inputMonth();

year.addEventListener("input", inputYear)
function inputYear(e){
    let regex = /[^\d]/g;
    yearNum = year.value.replace(regex, "");
    year.value = yearNum;
    dateYear.innerHTML = year.value; 
    if(year.value === ""){
        window.years = "00";
        dateYear.textContent = window.years;
    }
}
inputYear();

CVC.addEventListener("input", inputCVC);
function inputCVC(e){
    let regex = /[^\d]/g;
    let CVCNum = CVC.value.replace(regex, "");
    CVC.value = CVCNum;
    CVC1.textContent = CVC.value;
    if(CVC.value === ""){
        window.cvc = "000";
        CVC1.innerHTML = window.cvc;
    }
}
inputCVC();

//Error messages
const cardNumError = document.getElementById("errormsgNum");
const nameError = document.getElementById("errormsgName");
const cvcError = document.getElementById("errormsgCvc");

//Validating Input

































