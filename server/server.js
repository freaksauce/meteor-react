Meteor.publish("customers", function () {
  return Users.find();
});

Meteor.startup(function() {
  // Create in 25 fake users.

  Users.remove({});

  _.each(_.range(25), function(){
    var randomEmail = faker.internet.email();
    var randomName = faker.name.findName();
    var userName = faker.internet.userName();
    var rnd = faker.random.number(100000);
    var userObj = {
      name: randomName,
      email: randomEmail,
      username: userName,
      password: 'password',
      rnd: rnd,
      validated: 0
    }
    Customers.insert(userObj);
  });
  // console.log(Customers.find().fetch());

});
