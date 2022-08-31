const billedAmount = document.querySelector("#billed-amount");
const cashAmount = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#button-check");
const notesCount = [...document.querySelectorAll(".notes-count")];
const errorMessage = document.querySelector("#error-message");
const noteDenominations = [2000,500,100,20,10,5,1];

checkButton.addEventListener('click',findChange);

function findChange(){
    let billAmount = billedAmount.value;
    let cashGiven = cashAmount.value; 
    if(isNumeric(billAmount) && isNumeric(cashGiven)){
        if(parseInt(cashGiven,10) < parseInt(billAmount,10)){
            renderError("Please wash the dishes :)");
        } else {
            errorMessage.style.display = 'none';
            cashGiven = cashGiven - billAmount;
            for(let iterator = 0; iterator < noteDenominations.length; iterator++){
                notesCount[iterator].innerHTML = Math.trunc(cashGiven/noteDenominations[iterator]);
                cashGiven = cashGiven % noteDenominations[iterator];            
            }
        }
    } else {
        renderError("Please enter a numeric input for Billing and Cash amount");
    }
}


function isNumeric(str) {
    if (typeof str != "string") return false  
    return !isNaN(str) && !isNaN(parseFloat(str)) 
  }

function renderError(errMessage){
    notesCount.map(cell => cell.innerHTML = 0);
    errorMessage.innerHTML=errMessage;
    errorMessage.style.display = 'block';
}