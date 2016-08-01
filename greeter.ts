/**
 * Created by SQ04 on 8/1/2016.
 */

function greeter(person: string){
    return "Hello, "+ person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);