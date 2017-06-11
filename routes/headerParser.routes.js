import headerParser from '../controllers/headerParser.controller.js';

export default function(app) {
    app.get('/', function(req, res) {
        headerParser.getHeaderData(req, res);
    });
}