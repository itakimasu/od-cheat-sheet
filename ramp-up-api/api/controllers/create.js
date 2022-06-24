module.exports = {


  friendlyName: 'Create',


  description: 'Create something.',


  inputs: {
    id: {
      type: 'number'
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    phoneNumber: {
      type: 'number'
    }
  },


  exits: {
    success: {
      description: 'User created'
    }
  },


  fn: async function (inputs, exits) {

    var newUser = await User.create({
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      email: inputs.email,
      phoneNumber: inputs.phoneNumber
    });
    return exits.success();

  }


}
