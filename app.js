function calculate() {
    const income = parseInt(document.getElementById("income").value);
    console.log(income);

    const food = parseInt(document.getElementById("food").value);
    const rent = parseInt(document.getElementById("rent").value);
    const clothes = parseInt(document.getElementById("clothes").value);

    const expense = food + rent + clothes;

    const balance = income - expense;

    document.getElementById("total-expense").innerHTML = expense;
    document.getElementById("total-balance").innerHTML = balance;
}