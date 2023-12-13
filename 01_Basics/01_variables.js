const account_id = 12345;
let accountMail = "hg214981@gmail.com";
var passcode = "12345";
accountCity = "New Delhi";
let accountState

/*
account_id = 125678; -> not allowed 
console.log(account_id);
*/

accountMail = "jhhg123@gmail.com";
passcode = "56789";
accountCity = "Jaipur";

console.table([account_id, accountMail, passcode, accountCity]);
console.table([account_id, accountMail, passcode, accountCity, accountState]);
/* prefer not to use 'var' because of issue in block scope and functtional scope */