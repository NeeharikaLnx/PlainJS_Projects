class User{
    static userCount =0;

    constructor(username){
        this.username=username;
        User.userCount++;
    }
}

const user1 = new User("Nehea");

console.log(user1.username);
console.log(User.userCount);

