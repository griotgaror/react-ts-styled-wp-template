const { getRandomId } = require('../../utils/randomUtils');

const createBodyHair = function ({ image_url, extra_image_url, preview_image_url }) {
    const hairsPath = '/characters/hairs';

    const extraImage = extra_image_url
        ? `${hairsPath}/extras${extra_image_url}`
        : '';

    const hairData = {
        id: getRandomId(),
        image_url: `${hairsPath}${image_url}`,
        extra_image_url: extraImage,
        preview_image_url: `${hairsPath}${preview_image_url}`,
    };

    const emptyHair = {
        id: getRandomId(),
        image_url: '',
        extra_image_url: '',
        preview_image_url: '',
    };

    return image_url ? hairData : emptyHair;
};

const characterModelHairs = [
    {
        body_name: 'saiyajin-1',
        hairs: [
            createBodyHair({}),
            createBodyHair({
                image_url: '/saiyajin/body-1/goku.webp',
                preview_image_url: '/previews/goku.webp',
            }),
            createBodyHair({
                image_url: '/saiyajin/body-1/vegeta-black.webp',
                preview_image_url: '/previews/vegeta-black.webp',
            }),
            createBodyHair({
                image_url: '/saiyajin/body-1/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-white.webp',
            }),
            createBodyHair({
                image_url: '/saiyajin/body-1/goku-ssj-3-white.webp',
                extra_image_url: '/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-full-white.webp',
            }),
        ],
    },
    {
        body_name: 'saiyajin-2',
        hairs: [
            createBodyHair({}),
            createBodyHair({
                image_url: '/saiyajin/body-2/goku.webp',
                preview_image_url: '/previews/goku.webp',
            }),
            createBodyHair({
                image_url: '/saiyajin/body-2/vegeta-black.webp',
                preview_image_url: '/previews/vegeta-black.webp',
            }),
            createBodyHair({
                image_url: '/saiyajin/body-2/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-white.webp',
            }),
            createBodyHair({
                image_url: '/saiyajin/body-2/goku-ssj-3-white.webp',
                extra_image_url: '/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-full-white.webp',
            }),
        ],
    },
    {
        body_name: 'demon-1',
        hairs: [
            createBodyHair({}),
            createBodyHair({
                image_url: '/demon/body-1/goku.webp',
                preview_image_url: '/previews/goku.webp',
            }),
            createBodyHair({
                image_url: '/demon/body-1/vegeta-black.webp',
                preview_image_url: '/previews/vegeta-black.webp',
            }),
            createBodyHair({
                image_url: '/demon/body-1/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-white.webp',
            }),
            createBodyHair({
                image_url: '/demon/body-1/goku-ssj-3-white.webp',
                extra_image_url: '/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-full-white.webp',
            }),
        ],
    },
    {
        body_name: 'demon-2',
        hairs: [
            createBodyHair({}),
            createBodyHair({
                image_url: '/demon/body-2/goku.webp',
                preview_image_url: '/previews/goku.webp',
            }),
            createBodyHair({
                image_url: '/demon/body-2/vegeta-black.webp',
                preview_image_url: '/previews/vegeta-black.webp',
            }),
            createBodyHair({
                image_url: '/demon/body-2/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-white.webp',
            }),
            createBodyHair({
                image_url: '/demon/body-2/goku-ssj-3-white.webp',
                extra_image_url: '/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-full-white.webp',
            }),
        ],
    },
    {
        body_name: 'android-1',
        hairs: [
            createBodyHair({}),
            createBodyHair({
                image_url: '/android/goku.webp',
                preview_image_url: '/previews/goku.webp',
            }),
            createBodyHair({
                image_url: '/android/vegeta-black.webp',
                preview_image_url: '/previews/vegeta-black.webp',
            }),
            createBodyHair({
                image_url: '/android/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-white.webp',
            }),
            createBodyHair({
                image_url: '/android/goku-ssj-3-white.webp',
                extra_image_url: '/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-full-white.webp',
            }),
        ],
    },
    {
        body_name: 'android-2',
        hairs: [
            createBodyHair({}),
            createBodyHair({
                image_url: '/android/goku.webp',
                preview_image_url: '/previews/goku.webp',
            }),
            createBodyHair({
                image_url: '/android/vegeta-black.webp',
                preview_image_url: '/previews/vegeta-black.webp',
            }),
            createBodyHair({
                image_url: '/android/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-white.webp',
            }),
            createBodyHair({
                image_url: '/android/goku-ssj-3-white.webp',
                extra_image_url: '/goku-ssj-3-white.webp',
                preview_image_url: '/previews/goku-ssj-3-full-white.webp',
            }),
        ],
    },
];

module.exports = characterModelHairs;
