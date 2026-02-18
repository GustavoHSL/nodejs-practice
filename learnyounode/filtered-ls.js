const fs = require('fs');
const dir = process.argv[2];
const filter = process.argv[3];

fs.readdir(dir, (err, list) => {
    if (err) {
        console.log(err);
        return;
    }
    list.forEach(file => {
        if (file.endsWith('.' + filter)) {
            console.log(file);
        }
    });
});