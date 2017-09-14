const db = require('./models');

const getIncludes = (obj) => {
    let inc = JSON.parse(obj);
    console.log(inc)
    if (inc[0] === 'all') {
        return [{"all": true}];
    } else {
        let includes = [];
        for (var i = 0; i < inc.length; ++i) {
            let model = inc[i];
            includes.push({"model": db[model], required: false});
        }
        return includes;
    }
}

console.log(
    getIncludes('["Notification"]')
);