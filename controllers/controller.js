const boom = require('@hapi/boom');
const Email = require('../models/model');

exports.addEmail = (req, res) => {
    Email.create({
        email: req.body.email
    })
        .then((email) => {
            res.status(200).json({
                message: "Email " + req.body.email + " saved."
            });
        })
        .catch((err) => {
            throw boom.boomify(err);
        })
};

exports.getEmails = (req, res) => {
    Email.find()
        .then((emails) => {
            res.status(200).json({
                emails: emails
            });
        }).catch((err) => {
            throw boom.boomify(err);
        })
};
