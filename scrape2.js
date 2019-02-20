const Nightmare = require('nightmare')
var $ = require('jquery')
nightmare = Nightmare({
    show: true
});

let blah='';

nightmare
.goto('https://google.com')
//.inject('js','./node_modules/jquery/dist/jquery.min.js')
.wait(500)
.type('.gLFyf', 'blahcode')
.click('[name=btnK]')
.screenshot('blah.png')
.evaluate(function(){
    //blah = $('div#resultStats').text()
    this.blah = document.getElementById('resultStats').innerText;
    
}) 
.end()
//.then(console.log)
 .then(() => {
     console.log('blah: ' + this.blah)
 });



//.type('.gLFyf', 'sweetcode')

