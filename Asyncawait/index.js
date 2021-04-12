var fetch = require('node-fetch');
const Bluebird = require('bluebird');

fetch.Promise = Bluebird;
async function f() {
    try {
        fetch('https://github.com/')
            .then(res => {
                console.log(res.ok);
                console.log(res.status);
                console.log(res.statusText);
                console.log(res.headers.raw());
                console.log(res.headers.get('Accept-Language'));
            });
    } catch (err) {
        console.log(err); // TypeError: failed to fetch
    }
}

f();