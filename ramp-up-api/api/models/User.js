/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'userstable',
  attributes: {
    id: {
      type: 'number',
      columnName: 'id',
      autoIncrement: true,
      unique: true
    },
    firstName: {
      type: 'string',
      columnName: 'firstName'
    },
    lastName: {
      type: 'string',
      columnName: 'lastName'
    },
    email: {
      type: 'string',
      columnName: 'email'
    },
    phoneNumber: {
      type: 'number',
      columnName: 'phoneNumber'
    }
  },

};

