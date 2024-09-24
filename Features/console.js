const string = "abc";
const number = 1;
const boolean = true;

const obj = {
    outside:{
        inside:{
            key: 'value'
        }
    }
};

console.time("전체 시간");

console.log("평범한 로그");
console.error("에러와 관련된 메세지");
console.dir(obj);
console.dir(obj,{colors:true,depth:2});

console.time("시간측정");
for(let i=0; i<10000; i++){ continue; }
console.timeEnd("시간측정");

const b = ()=>{ console.trace("에러 위치 추적");}
const a = () =>{ b() };
a();

console.timeEnd("전체 시간");