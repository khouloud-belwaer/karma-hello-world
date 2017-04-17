describe("Users factory", function () {
  var users;

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
    }
  ];

  var singleUser = {
      id: 2,
      name: 'Akhil',
      role: 'Web Apps Engineer'
    };

  beforeEach(angular.mock.module("api.users"));

  beforeEach(inject(function(_users_) {
    users = _users_;
  }));
  it('should exist', function() {
    expect(users).toBeDefined();
  });

  describe(".all()", function() {
    it("if method exists", function() {
      expect(users.all).toBeDefined();
    });

    it("should return a hard coded list of users", function () {
      expect(users.all()).toEqual(userList);
    });
  });

  describe(".findById()", function() {
    it("should exist", function() {
      expect(users.findById).toBeDefined();
    });

    it("should return one user if it exists", function() {
      expect(users.findById(2)).toEqual(singleUser);
    });

    it("should return undefined if the user can not be found", function() {
      expect(users.findById(999)).not.toBeDefined()
    })
  });
});
