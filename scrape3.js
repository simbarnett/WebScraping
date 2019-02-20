const Nightmare = require('nightmare')
require('jquery')
nightmare = Nightmare({
    show: true
});

nightmare
.goto('https://google.com')
.end(() => {

})
.then()