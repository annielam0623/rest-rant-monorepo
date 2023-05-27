'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.addColum('users', 'role', {
        type: Sequelize.DataTypes.ENUM,
        value: [
          'reviewer',
          'admin',
        ],
        defaultValue: 'reviewer'
      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColum('users', 'role')
  }
};
