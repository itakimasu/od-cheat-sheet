module.exports = {


  friendlyName: 'Read',


  description: 'Read something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var allUsers = await User.find({});
    return allUsers.map(u => ({
      id: u.id,
      firstName: u.firstName,
      lastName: u.lastName,
      email: u.email,
      phoneNumber: u.phoneNumber
    }));

  }


};
