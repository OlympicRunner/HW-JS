function filterMails(mailsNew, mailsBlack) {
    
    let cleanMailList = [];

    for (let index in mailsNew) {
        let checkMail = mailsNew[index];
        let foundIndex = -1;
        for (let mail in mailsBlack) {
            let item = mailsBlack[mail];
            if (item === checkMail) {
                foundIndex = mail;
                break;
            }
        }
        console.log(foundIndex > -1 ? 
            `Данная почта в черном списке ${checkMail}!`: 
            `Данная почта чиста ${checkMail}`);
        if (foundIndex <= -1) {
            cleanMailList.push(checkMail)
        }
    }
    console.log(cleanMailList);
}

let mailsNew = ['asdsdfasd@gmail.com', 'asdasd@gmail.com', 'test1@gmail.com', 'test4@gmail.com','test6@gmail.com',]
let mailsBlack = ['test3@gmail.com', 'test2@gmail.com', 'test1@gmail.com',]

let check = filterMails(mailsNew, mailsBlack)
