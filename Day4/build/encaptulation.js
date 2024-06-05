"use strict";
class user {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    //method to user auth
    auth(enterpasswords) {
        return enterpasswords === this.password;
    }
    //change password
    changePassword(newpassword) {
        this.password = newpassword;
    }
}
const user1 = new user('nabin', 'nabin123');
console.log(user1.auth('nabin123'));
user1.changePassword('nabin1234');
console.log(user1.auth('nabin123'));
