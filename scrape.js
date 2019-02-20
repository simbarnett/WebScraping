var a = 1;
const Nightmare = require('nightmare')
require('jquery')
nightmare = Nightmare({
    show: true
});

nightmare
.goto('https://google.com')
.wait(500)
// .type('input[class="gLFyf gsfi"]', 'sweetcode')
.type('.gLFyf', 'sweetcode')
.wait(1500)
.click('[name=btnK]')
.wait('div#resultStats')
.exists('[href="https://sweetcode.io/"]')
.then((result) => {
    console.log('Result: ', result);
    return nightmare.end();
});