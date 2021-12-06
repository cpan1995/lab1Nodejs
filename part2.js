const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const readLine = require('readline-sync')
let newFileName  = '';
readline.question('Name of File: ', name => {
    let checker = checkFileName(name);
    
    while(!checker){
        let tempFileName = readLine.question('Enter Another File Name: \n')
        checker = checkFileName(tempFileName)
    }

    let tempText  = readLine.question('Enter Text: \n')
    fs.writeFileSync(`./${newFileName}.txt`, tempText)
});

const checkFileName = (fileName) => {
    let path = `./${fileName}.txt`
    if(fs.existsSync(path)){
        console.log('File Already Exists, writing to existing file');
        return false
    }
    newFileName = fileName;
    return true;
}