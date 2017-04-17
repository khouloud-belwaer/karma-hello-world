(function() {
  'use strict';

  angular.module("api.users", [])
    .service("users", function() {
      var users = {};
      var userList = [
        {
          id: 1,
          name: 'Rohit',
          role: 'Database Engineer'
        },
        {
          id: 2,
          name: 'Nikhil',
          role: 'Web Apps Engineer'
        },
        {
          id: 3,
          name: 'Akhil',
          role: 'Project Manager'
        },
        // {
        //   id: 4,
        //   name: 'Guru',
        //   role: 'Senior Web Apps Engineer'
        // }
      ];

      users.all = function () {
        return userList;
      };

      users.findById = function(id) {
        return userList.find(function(user) {
          return user.id === id;
        });
      };

      return users;
    });
})();
