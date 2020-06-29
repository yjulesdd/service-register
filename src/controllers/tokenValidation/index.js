const { default: makeGetTokenInfo } = require("./getTokenInfo");
const { default: makeValidateToken } = require("./tokenValidation");

const getTokenInfo = makeGetTokenInfo()
const validateToken = makeValidateToken();

export {getTokenInfo, validateToken};
export default {
    getTokenInfo,
    validateToken
}

module.exports = {
    getTokenInfo,
    validateToken
}

