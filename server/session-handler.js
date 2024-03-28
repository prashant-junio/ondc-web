const { v4: uuidv4 } = require("uuid");

/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} resp
 * @param {*} next
 * @returns
 */
async function handleSession(req, resp, next) {
  if (req.session &&
    !req?.session?.authentication?.is_anonymous_user &&
    !req?.session?.authentication?.is_logged_in
  ) {
    req.session.authentication = {};
    req.session.authentication.person_id = uuidv4();
    req.session.authentication.is_anonymous_user = true;
  }
  next();
}

async function sessionDataHydrateMiddleware(req, resp, next) {
  // console.log(req.session)
  resp.locals.context = {
    person_id: req?.session?.authentication?.person_id,
    is_anonymous_user: req?.session?.authentication?.is_anonymous_user,
    // person_id: "e63b2cf0-7bf1-4503-93bc-5ff1d92aa210",
  };
  next();
}

module.exports = { handleSession, sessionDataHydrateMiddleware };
