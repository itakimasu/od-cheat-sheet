module.exports = {


  friendlyName: 'Delete',


  description: 'Delete something.',


  inputs: {
    id: {
      type: 'number'
    }
    // firstName: {
    //   type: 'string'
    // },
    // lastName: {
    //   type: 'string'
    // },
    // email: {
    //   type: 'string'
    // },
    // phoneNumber: {
    //   type: 'number'
    // }
  },


  exits: {
    success: {
      description: 'Record deleted'
    }
  },


  fn: async function (inputs, exits) {

    var deleteUser = await User.destroyOne({id: inputs.id});
    return exits.success();

  }


};
