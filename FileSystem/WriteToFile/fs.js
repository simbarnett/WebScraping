var fs = require('fs');

var data = "New file contents";

fs.writeFile('temp.txt', data, function(err, data) {
    if (err) console.log(err);
    console.log('Successfully Written to File.')
})