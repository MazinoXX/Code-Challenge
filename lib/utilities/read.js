const fs = require("fs");
class Reader{
    static readJsonFile(path){
        const data = fs.readFileSync(path,{encoding:'utf8', flag:'r'});
        return JSON.parse(data);
    }

}


module.exports = Reader;