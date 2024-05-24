const sendResponse = {
    success: function (res, data) {
        res.status(200).json(data);
    },
    noContent: function (res, data) {
        res.status(204).json(data);
    },
    unauthorized: function (res, message) {
        return res.status(401).json({
            detail: message || 'Zugriff Verweigert',
        });
    },
    notFound: function (res, message) {
        res.status(404).json({
            detail: message || 'Ressource nicht gefunden',
        });
    },
    conflict: function (res, message) {
        res.status(409).json({
            detail: message || 'Konflikt',
        });
    },
    serverError: function (res, message) {
        res.status(500).json({
            detail: message || 'Interner Serverfehler',
        });
    },
};

module.exports = sendResponse;
