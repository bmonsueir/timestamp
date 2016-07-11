Template.time.helpers({
  someHelper: function() {
    var controller = Router.current();
    // return the _id parameter or whatever
    console.log(controller.params._id);
    return controller.params._id;
  }
});
