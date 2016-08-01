/**
 * Created by SQ04 on 8/1/2016.
 */

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, "+ person.firstName + " "+person.lastName;
}

var user = { firstName:"Jane", lastName: "User" };

document.body.innerHTML = greeter(user);