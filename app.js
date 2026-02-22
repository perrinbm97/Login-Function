let users = [
  {
    username: "David",
    email: "david@frontendsimplified.com",
    password: "abc123",
    subscriptionstatus: "VIP",
    discordID: "DavidBragg#0001",
    lessonsCompleted: [0, 1, 2, 3, 4, 5],
  },
  {
    username: "Braxton",
    email: "braxton@frontendsimplified.com",
    password: "def456",
    subscriptionstatus: "Premium",
    discordID: "bmper#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "Mark",
    email: "mark@frontendsimplified.com",
    password: "MarkiMark22",
    subscriptionstatus: "Basic",
    discordID: "mcMark#0001",
    lessonsCompleted: [0, 1],
  },
];

//What status is David?
console.log(users[0].subscriptionstatus);

//How many lessons did Braxton Complete?
console.log(users[1].lessonsCompleted);

//What is Mark's discord ID?
console.log(users[2].discordID);

// Login Function
function login(email, password) {
    for (let i=0; i<users.length; i++){
        if(users[i].email===email){
            if(users[i].password===password){
                console.log('Login success, the details are correct')
            }
            else{
                console.log('Password is incorrect, try again')
            }
            return;
        }
    }
    console.log('Could not find an account, make one now?')
}

login('david@frontendsimplified.com', 'abc123')

/**Register Function, accepts:
 * -username
 * -email
 * -password
 * -subscriptionStatus
 * -discordID
 * -lessonsCompleted
 *
 * Create the user object, and push onto the users array
 */

// function register(
//   username,
//   email,
//   password,
//   subscriptionStatus,
//   discordID,
//   lessonsCompleted,
// ) {
//     let user = {
//         username: username,
//         email: email,
//         password: password,
//         subscriptionStatus: subscriptionStatus,
//         discordID: discordID,
//         lessonsCompleted: lessonsCompleted
//     }
//     users.push(user);
// }

// register(
//   "Zen",
//   "zen@frontendsimplified.com",
//   "zilch67",
//   "VIP",
//   "Zip#001",
//   [0, 1, 2],
// );

// console.log(users);

//Clean version, make argument an object

function register(user) {
    users.push(user);
}

register({
  username: "Zen",
  email: "zen@frontendsimplified.com",
  password: "zilch67",
  subscriptionStatus: "VIP",
  discordID: "Zip#001",
  lessonsCompleted: [0, 1, 2],
});

console.log(users);
