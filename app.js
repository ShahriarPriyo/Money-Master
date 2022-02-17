// let income = document.getElementById("income");

// let food = document.getElementById("food");
// let rent = document.getElementById("rent");
// let clothes = document.getElementById("clothes");

function calculate() {
    // var income = parseInt(document.getElementById("income").value);
    // console.log(income);

    var income = document.getElementById("income").value;
    var food = (document.getElementById("food").value);
    var rent = (document.getElementById("rent").value);
    var clothes = (document.getElementById("clothes").value);
    let expense = 0;
    if (income == "" || food == "" || rent == "" || clothes == "") {
        alert("Not accepted");
        // if (isNaN(income) && isNaN(food) && isNaN(rent) && isNaN(clothes)) {
        //     if (income == ' ' && food == ' ' && rent == ' ' && clothes == ' ') {

        //     }
        // }
    }
    else if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        alert("Not accepted");
    }

    else if (parseInt(income) < 0 || parseInt(food) < 0 || parseInt(rent) < 0 || parseInt(clothes) < 0) {
        alert("Not accepted");
    }

    else {
        expense = Number(food) + Number(rent) + Number(clothes);
        console.log(expense);


    }




    let balance = Number(income) - expense;

    if (expense < income) {
        document.getElementById("total-expense").innerHTML = expense;
        document.getElementById("total-balance").innerHTML = balance;

    } else {
        alert("Expense more than your income");
    }

}

function saveButton() {
    // let saving = document.getElementById("save");
    // let savingAmount = Number(income.value * saving.value) / 100;

    var saving = document.getElementById("save").value;
    var mainIncome = document.getElementById("income").value;

    if (save == "") {
        alert("You must insert between 0 to 100");
    }
    else if (isNaN(save)) {
        alert("you must enter number");

    }
    else if (save < 0 || save > 100) {
        alert("you must insert value between 0 and 100");
    }


    var savingAmount = (saving * mainIncome) / 100;

    document.getElementById("total-saving").innerHTML = savingAmount;

    let previousBalance = document.getElementById("total-balance").innerText;
    let lastRemaining = Number(previousBalance) - savingAmount;
    document.getElementById("total-remaining").innerHTML = lastRemaining;

}