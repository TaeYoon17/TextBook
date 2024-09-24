
const os = require('os');

console.log(os.platform());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());

const path = require("path");

const globalJS = path.join(__dirname,"globalsB.js");
// console.log(globalJS);

function join_resolve() {
    // 절대경로가 무시됨
    console.log(path.join(__dirname, '..', '/time.js'));
    // 절대경로가 절대적임
    console.log(path.resolve(__dirnamem, '..', '/time.js'));
}

const pathEx = (string = __filename)=>{
    console.log('path.sep:', path.sep);
    console.log('path.delimiter',path.delimiter);

    console.log('path.parse()',path.parse(string));
    console.log('path.format():',path.format({
        dir: '/Users/kimtaeyoon/nodeStudy/TextBook/Features',
        name: 'ospath',
        ext: '.js'
    }));
};
pathEx();

