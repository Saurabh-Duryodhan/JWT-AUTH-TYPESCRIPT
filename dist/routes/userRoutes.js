"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userControllers_1 = require("../controllers/userControllers");
var authChecker_1 = require("../middleware/authChecker");
var userValidation_1 = require("../validation/userValidation/userValidation");
var router = (0, express_1.Router)();
router.get('/', authChecker_1.authChecker, function (req, res) {
    res.send({
        "message": "this is protected route"
    });
});
router.post("/signup", userValidation_1.signupUserValidation, userControllers_1.signupUser);
router.post("/signin", userValidation_1.signinUserValidation, userControllers_1.signinUser);
router.post("/send-verification-mail", userValidation_1.sendVerificationMailValidation, userControllers_1.sendVerificationMail);
router.post("/verfiy-user-mail", userValidation_1.verifyUserMailValidation, userControllers_1.verifyUserMail);
router.post("/verify-forgot-mail", userValidation_1.verifyForgotMailValidation, userControllers_1.verifyForgotMail);
router.post("/forgot-password", userValidation_1.sendForgotPasswordMailValidation, userControllers_1.sendForgotPasswordMail);
exports.default = router;
