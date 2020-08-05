import Joi from "joi"

const username = Joi.string().alphanum().min(3).max(30).required()

const fullname = Joi.string().min(3).max(128).trim().required()

const password = Joi.string().min(8).max(128).regex(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u)
    .message('"{#label}" must contain one uppercase, one lowercase, and one digit').required()

const confirmPassword = Joi.valid(Joi.ref('password')).error(new Error("password must match"))

const email = Joi.string().email({ tlds: {allow: false} }).min(8).max(254).lowercase().trim().required()

export const regSchema = Joi.object({
    fullname,
    username,
    email,
    password,
    confirmPassword
})
