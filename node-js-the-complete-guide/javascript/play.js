const name = 'Daph';
let age = 31;
const hasHobies = true;

const summarizeUser = (userName, userAge, userHasHobbies) => {
    'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies
}

console.log(summarizeUser(name, age, hasHobies));