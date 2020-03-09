const util = require("util");
const corsp = util.promisify(require("cors")({ origin: true }));

exports.getip = async (request, response) => {
  await corsp(request, response);
  response.send(request.headers["x-appengine-user-ip"]);
};
