function filter(mailsWhite, mailsBlack) {
    
    let cleanMailList = [];

    for (let index in mailsWhite) {
        let checkMail = mailsWhite[index];
        let foundIndex = -1;
        for (let mail in mailsBlack) {
            let item = mailsBlack[mail];
            if (item === checkMail) {
                foundIndex = mail;
                break;
            }
            else  {
                cleanMailList.push(checkMail);
            }
        }
        console.log(foundIndex > -1 ? 
            `Данная почта в черном списке ${checkMail}!`: 
            `Данная почта чиста ${checkMail}`);
    }
    console.log(cleanMailList);
}

let mailsWhite = ['asdsdfasd@gmail.com', 'asdasd@gmail.com', 'test1@gmail.com',]
let mailsBlack = ['test1@gmail.com', 'test2@gmail.com', 'test3@gmail.com',]

let check = filter(mailsWhite, mailsBlack)

// export default {
//     filter()
// }