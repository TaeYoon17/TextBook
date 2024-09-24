const usingURL = () => {
    const url = require('url');
    const myURL = new URL("http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor");

    // console.log('new URL(): ', myURL);
    // console.log("url.format():",url.format(myURL));

    console.log('searchParams:', myURL.searchParams);
    console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
    console.log(myURL.searchParams.has('page'));

    for (v of myURL.searchParams.keys()) {
        console.log(v);
    }
    for (v of myURL.searchParams.values()) {
        console.log(v);
    }

    myURL.searchParams.append('filter', 'es3');
    myURL.searchParams.append('filter', 'es5');

    myURL.searchParams.set('filter', 'es6');
    console.log(myURL.searchParams.getAll('filter'));

    console.log('searchParams.toString(): ', myURL.searchParams.toString());
};
// import dns from 'dns/promises';
const dns = require('dns').promises;
const usingDNS = async ()  => {
    const ip = await dns.lookup('gilbut.co.kr');
    console.log('IP',ip);

    const a = await dns.resolve('gilbut.co.kr','A');
    console.log('A',a);

    const mx = await dns.resolve('gilbut.co.kr','MX');
    console.log('MX',mx);
};
usingDNS();