function Task(dueDate, details) {
  this.dueDate = dueDate;
  this.details = details;
}

Task.prototype.fullTask = function() {
  return this.details + " is due on " + this.dueDate;
}

$(document).ready(function() {
  $("form#new-task").submit(function() {

    var inputtedDetails = $("input#new-details").val();
    var inputtedDueDate = $("input#new-due-date").val();
    var newTask = new Task(inputtedDueDate, inputtedDetails);

    $("ul#toDo").append("<li><input type='checkbox' class='listItem'>" + newTask.fullTask() + "</input><a class='remove' href='#'>X</a></li></ul>");

    $("input#new-details").val("");
    $("input#new-due-date").val("");

  event.preventDefault();
  });
});

$(document).on("click", ".remove", function() {
    $(this).parent().remove();
});
