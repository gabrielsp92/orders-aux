const autocannon = require('autocannon');
const { PassThrough, promises } = require('stream');

async function run(url, method, body = {}) {
    const buf = [];
    const outputStream = new PassThrough();

    const inst = autocannon({
        url,
        connections: 10,
        duration: 500000,
        connectionRate: 1,
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer asd"
        },
        body: JSON.stringify(body),
    })

    autocannon.track(inst, { outputStream });

    outputStream.on('data', (data) => buf.push(data));

    inst.on('done', () => process.stdout.write(Buffer.concat(buf)))
}


Promise.all([
    run('http://localhost:4000/api/orders/active?merchantId=1', 'GET'),
    run('http://localhost:4000/api/orders/1/status/in-preparation', 'POST', { orderId: 1 }),
    run('http://localhost:4000/api/orders/active?merchantId=2', 'GET'),
    run('http://localhost:4000/api/orders/21/status/in-preparation', 'POST', { orderId: 2 }),
    run('http://localhost:4000/api/orders/active?merchantId=3', 'GET'),
    run('http://localhost:4000/api/orders/23/status/in-preparation', 'POST', { orderId: 3 }),
    run('http://localhost:4000/api/orders/active?merchantId=4', 'GET'),
    run('http://localhost:4000/api/orders/33/status/in-preparation', 'POST', { orderId: 3 }),
    run('http://localhost:4000/api/orders/active?merchantId=5', 'GET'),
    run('http://localhost:4000/api/orders/38/status/in-preparation', 'POST', { orderId: 5 }),
])


