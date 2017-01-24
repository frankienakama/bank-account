// backend


// frontend
$(document).ready(function () {
  $("#bank-acct").submit(function(event){
    event.preventDefault();


  })

  $("#newAcct").click(function() {
    var user = $("#name").val();
    var firstDep = parseInt($("#firstDep").val());

    $(".userName").text(user);
    $(".initial").text(firstDep);

  });



  $("#adjust-acct").submit(function(event) {
    event.preventDefault();

  });
});
