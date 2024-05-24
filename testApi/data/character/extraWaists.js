const { createApperanceData } = require('../../utils/helperUtils');

const apeTails = [
    createApperanceData(''),
    createApperanceData('/characters/extra_waist/ape-tail/black'),
    createApperanceData('/characters/extra_waist/ape-tail/blue'),
    createApperanceData('/characters/extra_waist/ape-tail/brown'),
    createApperanceData('/characters/extra_waist/ape-tail/green'),
    createApperanceData('/characters/extra_waist/ape-tail/grey'),
    createApperanceData('/characters/extra_waist/ape-tail/pink'),
    createApperanceData('/characters/extra_waist/ape-tail/purble'),
    createApperanceData('/characters/extra_waist/ape-tail/red'),
    createApperanceData('/characters/extra_waist/ape-tail/turquoise'),
    createApperanceData('/characters/extra_waist/ape-tail/white'),
    createApperanceData('/characters/extra_waist/ape-tail/yellow'),
];

const machineTails = [
    createApperanceData('/characters/extra_waist/machine-tail/black'),
    createApperanceData('/characters/extra_waist/machine-tail/blue'),
    createApperanceData('/characters/extra_waist/machine-tail/brown'),
    createApperanceData('/characters/extra_waist/machine-tail/green'),
    createApperanceData('/characters/extra_waist/machine-tail/grey'),
    createApperanceData('/characters/extra_waist/machine-tail/pink'),
    createApperanceData('/characters/extra_waist/machine-tail/purble'),
    createApperanceData('/characters/extra_waist/machine-tail/red'),
    createApperanceData('/characters/extra_waist/machine-tail/turquoise'),
    createApperanceData('/characters/extra_waist/machine-tail/white'),
    createApperanceData('/characters/extra_waist/machine-tail/yellow'),
];

const extraWaists = [...apeTails, ...machineTails];

module.exports = extraWaists;
