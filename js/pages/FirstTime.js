var FirstTime = CUORE.Class(CUORE.Page, {

  initializeServices: function() {
      this.addService(new Names());
      this.addService(new Proposals());
      this.addService(new Questions());
  },

  initializeComponents: function() {
    this.addComponent(new Involved(),'involved');
    this.addComponent(new Proposal(),'proposal');
    this.addComponent(new Question(),'theQuestion');
    this.addComponent(new QuestionList(),'questionList');
  },

});