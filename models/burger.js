var orm = require("../config/orm");


var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
    },
    eat: function(id, cb) {
        orm.eat("burgers", id, function(res) {
        cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("burgers", name, function(res) {
            cb(res);
        });
    }

};

// Export the database functions for the controller (burgers_controller.js).

module.exports = burger;
