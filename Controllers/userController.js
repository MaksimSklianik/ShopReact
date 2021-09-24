const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {
    }

    async login(req, res) {
    }

    async check(req, res, nex) {
        const {id} = req.query
        if (!id) {
           return nex(ApiError.badRequest('no set IP'))
        }
        res.json(id)

    }
}


module.exports = new UserController()
