const createStyledComponentsTransformer =
    require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

const getCustomTransformer = () => ({
    before: [styledComponentsTransformer],
});

module.exports = getCustomTransformer;
