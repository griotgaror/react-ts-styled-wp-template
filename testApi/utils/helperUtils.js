const findObjectInArray = function (arr, id) {
    return arr.find((obj) => obj.id === id) || arr[0];
};

module.exports = {
    findObjectInArray,
};
