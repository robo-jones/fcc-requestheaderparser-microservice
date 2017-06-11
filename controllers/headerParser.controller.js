const getHeaderData = function(req, res) {
    const ips = req.get('X-Forwarded-For').split(',');
    const acceptLanguage = req.get('Accept-Language');
    const userAgent = req.get('User-Agent');
    res.json({
        ipAddress: (ips[0] || req.ip),
        language: acceptLanguage.substring(0, acceptLanguage.indexOf(',')),
        OS: userAgent.substring(userAgent.indexOf('(') + 1, userAgent.indexOf(')'))
    });
};

export default {
    getHeaderData: getHeaderData
};