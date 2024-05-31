const maria = require('../config/maria');
const rows = maria.query("select * from todo" , (err,res) => {
    console.log(err);
    console.log(res);
    maria.end();
});
