const createTemplate = require('./templates/createTemplate');

// из аргументов достаем название слоя и слайса

const layer = process.argv[2];
const sliceName = process.argv[3];

// process.argv.forEach((value) => console.log(value));

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Укажите слой ${layers.join(' или ')}`);
}

if (!sliceName) {
    throw new Error('Укажите название слайса');
}

createTemplate(layer, sliceName);
