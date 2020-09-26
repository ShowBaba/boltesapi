const boom = require('@hapi/boom');
const Email = require('../models/model');

exports.addEmail = async (req, res) => {
    // try {
    const email = new Email({
        email: req.body.email
    });

    try {
        email.save()
            .then(
                res.status(200).json({
                    messages: "Email Saved"
                })
            );

    } catch (err) {
        throw boom.boomify(err);
    }
};

exports.getEmails = (req, res) => {
    try {
        Email.find()
            .then((emails) => {
                res.status(200).json({
                    emails: emails
                });
            });

    } catch (err) {
        throw boom.boomify(err);
    }
};
