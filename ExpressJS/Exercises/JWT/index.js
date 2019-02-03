const fs = require('fs');
const jwt = require('jsonwebtoken');

// PAYLOAD

const payload = {
    myPersonalTestData: 'My personal test data',
    myPersonalTestData1: 'My personal test data1',
    myPersonalTestData2: 'My personal test data2',
}

// PRIVATE and PUBLIC key

const privateKEY = fs.readFileSync('./private.key', 'utf8');
const publicKEY = fs.readFileSync('./public.key', 'utf8');

const i  = 'Mysoft corp';          // Issuer 
const s  = 'some@user.com';        // Subject 
const a  = 'http://mysoftcorp.in'; // Audience

// SIGNING OPTIONS

const signOptions = {
 issuer:  i,
 subject:  s,
 audience:  a,
 expiresIn:  "12h",
 algorithm:  "HS256"
};

let token = jwt.sign(payload, privateKEY, signOptions);
console.log(token)
const verifyOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithms:  ["HS256"],
};

jwt.verify(token,publicKEY, verifyOptions, (err, decoded) => { 
    if(err) throw err;
    console.log(decoded);
});
// console.log(legit)

var decoded =  jwt.decode(token, {complete: true});
// console.log("\nDecoded jwt: "+ JSON.stringify(decoded));