var moment = require('moment'); // toda la info
moment.locale('es');

console.log('naci ' + moment('17/12/2002', 'DD/MM/YYYY').fromNow());