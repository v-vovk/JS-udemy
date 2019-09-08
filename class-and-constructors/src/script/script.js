// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello, ' + this.name + '!');
//     };
// }

// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел!');
// };

// let ivan = new User('Ivan', 13);
// let alex = new User('Alex', 17);

// ivan.exit();

//same code ES6
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name} !`);
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел!`);
    }
}

let ivan = new User('Ivan', 13);
let alex = new User('Alex', 17);

ivan.exit();
