/**
 * Created by SQ04 on 8/1/2016.
 */
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map