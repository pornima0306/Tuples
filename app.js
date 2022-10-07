var cl = console.log;
/* Tuples >> Fixed length array */
// UserRole  RoleId   Rolename  canSeeCompanyJob  canSeeCandidate  canSeecandidateandCompany
//Candidate >> 1 'candidate' true  false  false 
//AdminHR >> 2  'adminHr' false true false
//SuperAdmin >> 3  'superAdmin' true true true
var person = {
    name: 'Harry',
    userId: 'ewrytrtyri',
    age: 37,
    hobbies: ['Cricket', 'Coding', 'cooking'],
    role: [2, 'Admin', false, true, false]
};
//person.role[0] = "xyz" // on 0th index only number is store
person.role[0] = 3;
//person.role[1] = 5 //on 1st index only string is store
person.role.push("abc"); // drawback of tuples we can used array methods on tuples
if (person.role[1] === 'Admin') {
    cl("Can see only Admin Page");
}
if (person.role[1] === 'Candidate') {
    cl("Can see only Candidate Page");
}
if (person.role[1] === 'SuperAdmin') {
    cl("Can see only SuperAdmin Page");
}
