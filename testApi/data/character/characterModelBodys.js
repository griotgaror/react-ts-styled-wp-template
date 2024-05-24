const { getRandomId } = require('../../utils/randomUtils');
const characterModelHairs = require('./characterModelHairs');

const createBody = function ({ name, race, image_url, hairs }) {
    return {
        id: getRandomId(),
        name: name,
        race: race,
        image_url: `${image_url}.webp`,
        preview_image_url: `${image_url}-preview.webp`,
        hairs: hairs,
    };
};

const characterModelBodys = [
    createBody({
        name: 'saiyajin-1',
        race: 'Saiyajin',
        image_url: '/characters/body/saiyajin/1',
        hairs: characterModelHairs[0].hairs,
    }),
    createBody({
        name: 'saiyajin-2',
        race: 'Saiyajin',
        image_url: '/characters/body/saiyajin/2',
        hairs: characterModelHairs[1].hairs,
    }),
    createBody({
        name: 'demon-1',
        race: 'Demon',
        image_url: '/characters/body/demon/1',
        hairs: characterModelHairs[2].hairs,
    }),
    createBody({
        name: 'demon-2',
        race: 'Demon',
        image_url: '/characters/body/demon/2',
        hairs: characterModelHairs[3].hairs,
    }),
    createBody({
        name: 'android-1',
        race: 'Android',
        image_url: '/characters/body/android/1',
        hairs: characterModelHairs[4].hairs,
    }),
    createBody({
        name: 'android-2',
        race: 'Android',
        image_url: '/characters/body/android/2',
        hairs: characterModelHairs[5].hairs,
    }),
];

module.exports = characterModelBodys;
