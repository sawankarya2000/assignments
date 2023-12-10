const fs = require("fs");

let updatedData = "";

fs.readFile("./medium/text.txt", 'utf-8', function (error, data) {
    if(error) {
        console.log(error);
    }else{
        let flag = true;
        for(let i = 0 ; i<data.length ; i++) {
            if(data[i] == ' ') {
                if(flag == false) updatedData += ' ';
                flag = true;
            }else{
                flag = false;
                updatedData += data[i];
            }
        }
        fs.writeFile("./medium/text.txt", updatedData, 'utf-8', function(err) {
            if(err) {
                console.log(err);
                return;
            }
            console.log("The file has been written");
        })
    }
});

