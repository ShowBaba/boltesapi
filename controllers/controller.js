const boom = require('@hapi/boom');
const Email = require('../models/model');

exports.addEmail = async (req, res) => {
    try {
        const email = new Email(req.body);
        email.save()
        .then(
            res.status(200).json({
                messages: "Email Saved"
            })
        );
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.getEmails = async (req, res) => {
    try {
        const email = await Email.find()
        res.status(200).json({
            messages: email
        });
    } catch (err) {
        throw boom.boomify(err)
    }
}