const getHeaderData = function(req, res) {
    const ip = req.ip.split(':');
    const acceptLanguage = req.get('Accept-Language');
    const userAgent = req.get('User-Agent');
    res.json({
        ipAddress: ip[ip.length - 1],
        language: acceptLanguage.substring(0, acceptLanguage.indexOf(',')),
        OS: userAgent.substring(userAgent.indexOf('(') + 1, userAgent.indexOf(')'))
    });
};

export default {
    getHeaderData: getHeaderData
};