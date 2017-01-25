// backend

//define each tranaction amount
function BankAccount(balance, deposit, withdrawal) {
  this.balance = balance;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}
//stuff
BankAccount.prototype.makeWithdrawal = function(balance, withdrawal) {
  return this.balance - this.withdrawal;
}

BankAccount.prototype.makeDeposit = function(balance, deposit) {
  return this.balance + this.deposit;
}


// frontend
$(document).ready(function () {
// first form submit (name and initial deposit)
  $("#bank-acct").submit(function(event){
    event.preventDefault();
  });
  $("#newAcct").click(function() {
    var user = $("#name").val();
    var firstDep = $("#firstDep").val();

    $(".userName").text(user);
    $(".initial").text(firstDep);
  });

// second form submit (deposit and withdrawal)
  $("#adjust-acct").submit(function(event) {
    event.preventDefault();
  });
  $("#changeMoney").click(function() {
    var currentBal = parseInt($("span.initial").val());
    var newDeposit = parseInt($("#newDep").val());
    var newWithdrawal = parseInt($("#withdrawal").val());

    var balance = new BankAccount(currentBal, newDeposit, newWithdrawal);

    $("span.balace").text(balance.makeWithdrawal());
    $("span.balance").text(balance.makeDeposit());
  });
});
