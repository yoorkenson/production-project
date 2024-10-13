const path = require('path');
// выход на верх проекта, чтобы удобно переходить по папкам до корня
module.exports = (...segments) => path.resolve(__dirname, '..', '..', ...segments);
