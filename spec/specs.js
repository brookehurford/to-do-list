describe ("task", function (userInput) {
  it("create a new task based on given properties", function() {
    var testTask = new task ("2/1/16", "Clean my room")
    expect(testTask.dueDate).to.equal("2/1/16");
    expect(testTask.details).to.equal("Clean my room");
  });

  it("add the fullTask method to the dueDate", function() {
    var testTask = new task ("2/1/16", "Clean my room");
    expect(testTask.fullTask()).to.equal("Clean my room is due on 2/1/16");
});
});
