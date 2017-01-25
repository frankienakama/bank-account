// backend

//define each tranaction amount
function BankAccount(balance) {
  this.balance = balance;
  this.history = [];
}
//transaction history
function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
}
//stuff
BankAccount.prototype.makeDeposit = function(deposit) {
  this.balance += deposit;
}
BankAccount.prototype.makeWithdrawal = function(withdrawal) {
  this.balance -= withdrawal;
}
Transaction.prototype.displayHistory = function() {
  return this.type + this.amount;
}



// frontend
$(document).ready(function () {
// make the balance variable global
  var bankAcct = new BankAccount(0);
// first form
  $("#bank-acct").submit(function(event){
    event.preventDefault();

    var userName = $("#name").val();
    var firstDep = parseFloat($("#firstDep").val());
    bankAcct.makeDeposit(firstDep);

    $(".userName").text(", " + userName);
    $(".initial").text("$" + bankAcct.balance);
  });


// second form submit (deposit and withdrawal)
  $("#adjust-acct").submit(function(event) {
    event.preventDefault();

    var newDeposit = parseFloat($("#newDep").val());
    if(isNaN(newDeposit)) {
      newDeposit = 0;
    }
    bankAcct.makeDeposit(newDeposit);
    $("#newDep").val("0");

    var newWithdrawal = parseFloat($("#withdrawal").val());
    if(isNaN(newWithdrawal)){
      newWithdrawal = 0;
    }
    bankAcct.makeWithdrawal(newWithdrawal);

    $("span.balance").text("$" + bankAcct.balance);

    var total = newDeposit - newWithdrawal;
    if(total < 0) {
      var type = "withdrawal";
    } else {
      var type = "deposit";
    }

    var transaction = new Transaction(type, total)

    $("ul#transaction").append("<li>" + transaction.displayHistory() + "</li>");
  });
});
