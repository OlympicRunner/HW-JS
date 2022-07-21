function findCardIndex(mails, checkEmail = 'test@gmail.com') {
    console.log('Проверяем почту: ' + checkEmail);
    let foundIndex = -1;

        for (let index in mails) {
            let mail = mails[index];
        if (mail === checkEmail) {
            foundIndex = index;
            break;
        }

    
    console.log(foundIndex > -1 ? 
        `Данная почта в черном списке ${checkEmail}!`: 
        `Данная почта чиста ${checkEmail}`);
        return foundIndex;
    }
}


let freeEmailList = ['test7@gmail.com', 'test2@gmail.com','test8@gmail.com']
let blackEmailsList = ['test1@gmail.com', 'test2@gmail.com', 'test3@gmail.com', 'test4@gmail.com', 'test5@gmail.com', 'test6@gmail.com'];
let aceIndex = findCardIndex(blackEmailsList, 'khasd@gmail.com');

console.log(aceIndex);

function chechEmails(freeEmailList) {
    for (let item in freeEmailList) {
        let email = freeEmailList[item];
        function findCardIndex(blackEmailsList, email)
    }
}