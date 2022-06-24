module.exports = {


  friendlyName: 'Update',


  description: 'Update something.',


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
      description: 'User updated'
    }
  },


  fn: async function (inputs, exits) {

    var updateUser = await User.updateOne({ id:inputs.id })
      .set({
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        phoneNumber: inputs.phoneNumber
      });
    return exits.success();

  }


};
