const { createAssetPath } = require('../../utils/helperUtils');

const consumableImages = [
    createAssetPath('/items/test-item-1.webp'),
    createAssetPath('/items/test-item-3.webp'),
    createAssetPath('/items/test-item-4.webp'),
    createAssetPath('/items/test-item-8.webp'),
    createAssetPath('/items/test-item-10.webp'),
];

const gearImages = [
    createAssetPath('/items/test-item-2.webp'),
    createAssetPath('/items/test-item-5.webp'),
    createAssetPath('/items/test-item-6.webp'),
    createAssetPath('/items/test-item-7.webp'),
    createAssetPath('/items/test-item-9.webp'),
    createAssetPath('/items/test-item-11.webp'),
    createAssetPath('/items/test-item-12.webp'),
    createAssetPath('/items/test-item-13.webp'),
    createAssetPath('/items/test-item-14.webp'),
    createAssetPath('/items/test-item-15.webp'),
];

const itemImages = {
    consumableImages,
    gearImages,
};

module.exports = itemImages;
