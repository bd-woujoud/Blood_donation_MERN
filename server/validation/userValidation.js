const joi = require("@hapi/joi");

const userValidation = (data) => {

  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).alphanum().required(),
    confirm_password: joi.string().min(6).alphanum().required(),
    nom_famille: joi.string().required(),
    prenom: joi.string().required(),
    gouvernorat: joi.string().required(),
    groupe_sanguin: joi.string().required(),
    date_naissance: joi.number().required(),
    role: joi.string(),
    code_postal: joi.number().required(),
    tel: joi
      .string()
      .length()
      .pattern(/^[0-9]+$/)
      .required(),

  });

  return schema.validate(data, { abortEarly: false });

};

const annonceValidation = (data) => {

  const schema = joi.object({

  
    categorie: joi.string().required(),
    groupe_sanguin: joi.string().required(),
    emplacement: joi.string().required(),
    description: joi.string().required(),
    tel: joi.string(),
    email: joi.string().required(),
    user: joi.string().required(),
    titre: joi.string().required(),
    gouvernorat: joi.string().required(),

  });

  return schema.validate(data, { abortEarly: false });
};

module.exports = {
  userValidation,
  annonceValidation
};
