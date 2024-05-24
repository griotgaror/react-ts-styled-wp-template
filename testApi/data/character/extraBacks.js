const { createApperanceData } = require('../../utils/helperUtils');

const cloaks = [
    createApperanceData('/characters/extra-back/cloak/black'),
    createApperanceData('/characters/extra-back/cloak/blue'),
    createApperanceData('/characters/extra-back/cloak/brown'),
    createApperanceData('/characters/extra-back/cloak/green'),
    createApperanceData('/characters/extra-back/cloak/grey'),
    createApperanceData('/characters/extra-back/cloak/pink'),
    createApperanceData('/characters/extra-back/cloak/purble'),
    createApperanceData('/characters/extra-back/cloak/red'),
    createApperanceData('/characters/extra-back/cloak/turquoise'),
    createApperanceData('/characters/extra-back/cloak/yellow'),
    createApperanceData('/characters/extra-back/cloak/white'),
];

const dinoWings = [
    createApperanceData('/characters/extra-back/dino-wing/black'),
    createApperanceData('/characters/extra-back/dino-wing/blue'),
    createApperanceData('/characters/extra-back/dino-wing/brown'),
    createApperanceData('/characters/extra-back/dino-wing/green'),
    createApperanceData('/characters/extra-back/dino-wing/grey'),
    createApperanceData('/characters/extra-back/dino-wing/pink'),
    createApperanceData('/characters/extra-back/dino-wing/purble'),
    createApperanceData('/characters/extra-back/dino-wing/red'),
    createApperanceData('/characters/extra-back/dino-wing/turquoise'),
    createApperanceData('/characters/extra-back/dino-wing/yellow'),
    createApperanceData('/characters/extra-back/dino-wing/white'),
];

const extraBacks = [
    createApperanceData(''),
    ...cloaks,
    ...dinoWings,
    ...dinoWings,
    ...dinoWings,
    ...dinoWings,
    ...dinoWings,
];

module.exports = extraBacks;
