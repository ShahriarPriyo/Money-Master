function validateExpenseInputField() {
    let flag = false;
    var income = document.getElementById("income").value;
    var food = (document.getElementById("food").value);
    var rent = (document.getElementById("rent").value);
    var clothes = (document.getElementById("clothes").value);
    let expense = 0;
    if (income == "" || food == "" || rent == "" || clothes == "") {
        alert("Not accepted");
        flag = true;
    }
    else if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        alert("Not accepted");
        flag = true;
    }

    else if (parseInt(income) < 0 || parseInt(food) < 0 || parseInt(rent) < 0 || parseInt(clothes) < 0) {
        alert("Not accepted");
        flag = true;
    }
    return flag;

}


function calculate() {
    var income = document.getElementById("income").value;
    var food = (document.getElementById("food").value);
    var rent = (document.getElementById("rent").value);
    var clothes = (document.getElementById("clothes").value);
    let expense = 0;
    if (!validateExpenseInputField()) {
        // total expense here
        expense = Number(food) + Number(rent) + Number(clothes);
        let balance = Number(income) - expense;

        if (expense > income) {
            alert("Expense more than your income");

        } else {
            updateExpenseBalance(expense, balance)

        }
    }
    else {
        updateExpenseBalance("", "")
    }
}

function updateExpenseBalance(expense, balance) {
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("total-balance").innerText = balance;
}


function validateSavingInputField() {
    let flag = false;
    var saving = document.getElementById("save").value;
    var mainIncome = document.getElementById("income").value;
    var previousBalance = document.getElementById("total-balance").innerText;
    var savingAmount = (saving * mainIncome) / 100;
    if (saving == "") {
        alert("You must insert between 0 to 100");
        flag = true;
    }
    else if (isNaN(saving)) {
        alert("you must enter number");
        flag = true;
    }
    else if (parseInt(saving) < 0 || parseInt(saving) > 100) {
        alert("you must insert value between 0 and 100");
        flag = true;
    }
    else if (savingAmount > previousBalance) {

        alert("saving is more than your current balance, save less");
        document.getElementById("total-remaining").innerHTML = "";
        flag = true;
    }
    return flag;
}



// onclick event handler 
function saveButton() {

    let flag = false;
    var saving = document.getElementById("save").value;
    var mainIncome = document.getElementById("income").value;
    var previousBalance = document.getElementById("total-balance").innerText;
    var savingAmount = (saving * mainIncome) / 100;

    if (!validateSavingInputField()) {
        document.getElementById("total-saving").innerHTML = savingAmount;
        var lastRemaining = Number(previousBalance) - savingAmount;
        document.getElementById("total-remaining").innerHTML = lastRemaining;

    }
}