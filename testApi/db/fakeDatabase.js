let fakeDatabase = null;

const initializeFakeDatabase = async function () {
    if (fakeDatabase) {
        return fakeDatabase;
    }

    fakeDatabase = {};
};

module.exports = {
    initializeFakeDatabase,
};
