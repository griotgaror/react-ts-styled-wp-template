const { createAssetPath } = require('../utils/helperUtils');

const createNpc = function (url, name) {
    return {
        image_url: createAssetPath(`/npcs${url}`),
        name: name,
    };
};

const npcs = [
    createNpc('/prinz-pilaf-saga/tiger.webp', 'Tiger'),
    createNpc('/prinz-pilaf-saga/pterodactyl.webp', 'Pterodactyl'),
    createNpc('/prinz-pilaf-saga/baerendieb.webp', 'Bärendieb'),
    createNpc('/prinz-pilaf-saga/stier.webp', 'Stier'),
    createNpc('/prinz-pilaf-saga/oger.webp', 'Oger'),
    createNpc('/prinz-pilaf-saga/dino.webp', 'Dino'),
    createNpc('/prinz-pilaf-saga/pool.webp', 'Pool'),
    createNpc('/prinz-pilaf-saga/yamchu.webp', 'Yamchu'),
    createNpc('/prinz-pilaf-saga/yamchu-und-pool.webp', 'Yamchu und Pool'),
    createNpc('/prinz-pilaf-saga/son-goku-wehraffe.webp', 'Son Goku Wehraffe'),
    createNpc('/prinz-pilaf-saga/rinderteufel.webp', 'Rinderteufel'),
    createNpc('/prinz-pilaf-saga/shu.webp', 'Shu'),
    createNpc('/prinz-pilaf-saga/mai.webp', 'Mai'),
    createNpc('/prinz-pilaf-saga/pilaf.webp', 'Pilaf'),
    createNpc('/prinz-pilaf-saga/pilaf-mai-shu.webp', 'Pilaf, Mai und Shu'),
];

const generateFakeNpcs = function () {
    return npcs;
};

module.exports = generateFakeNpcs;
