
const annonceModel = require("../Models/annonceModel");
const { annonceValidation } = require("../validation/userValidation");

module.exports = {

  createAnnonce: function (req, res) {

    const {error} = annonceValidation(req.body);

    if (error)

    return res.status(500).json({
        success: false,
        errors: error ,
        message: 'user data validation error'
    })

     else {
       
    annonceModel.create(req.body, function (err, annonce) {

      if (err) {

          res.json({
          message: "error created annonce" + err,
          data: null,
          status: 500,

        });

      } else {

        res.json({
          message: "seccuss created annonce",
          data: annonce,
          status: 200,

        });

      }
    });
  }},


  updateAnnonce: function (req, res) {
    annonceModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      function (err, annonce) {
        if (err) {
          res.json({
            message: "error updated annonce" + err,
            data: null,
            status: 500,
          });
        } else {
          res.json({
            message: "seccuss update annonce",
            data: annonce,
            status: 200,
          });
        }
      }
    );
  },

  deleteAnnonce: function (req, res) {
    annonceModel.findByIdAndDelete(
      { _id: req.params.id },
      function (err, annonce) {
        if (err) {
          res.json({
            message: "error deleted annonce" + err,
            data: null,
            status: 500,
          });
        } else {
          res.json({
            message: "seccuss delted annonce",
            data: annonce,
            status: 200,
          });
        }
      }
    );
  },

  getAllAnnonce: function (req, res) {
    annonceModel
      .find({})
      .populate("user")
      .exec((err, annonce) => {
        if (err) {
          res.json({
            message: "error get all annonce" + err,
            data: null,
            status: 500,
          });
        } else {
          res.json({
            message: "All annonce in DB",
            data: annonce,
            status: 200,
          });
        }
      });
  },

  getAnnonceById: function (req, res) {
    annonceModel
      .findById({ _id: req.params.id })
      .populate("user")
      .exec((err, annonce) => {
        if (err) {
          res.json({
            message: "error get  annonce" + err,
            data: null,
            status: 500,
          });
        } else {
          res.json({
            message: "seccuss get annonce by id",
            data: annonce,
            status: 200,
          });
        }
      });
  },


  getAnnonceByUserId: function (req, res) {
    annonceModel
      .find({ user: req.params.id })
      .populate("user")
      .exec((err, annonce) => {
        if (err) {
          res.json({
            message: "error get  annonce" + err,
            data: null,
            status: 500,
          });
        } else {
          res.json({
            message: "seccuss get annonce by iddddd",
            data: annonce,
            status: 200,
          });
        }
      });
  },



  Searchannonce: (req,res)=> {
 
    console.log(req.query.keyword);

    const {keyword } = req.query

    annonceModel.find( req.params.keyword !== '' ? {
        $or: [{ categorie: { $regex: keyword, $options: 'i' } },
        {emplacement: { $regex: keyword, $options: 'i' } } ,
            {groupe_sanguin: { $regex: keyword, $options: 'i' } } ,
  
      
        ]
    } : {})
    
    .then(annonces => {

        res.status(200).json({
            message: 'all annonces found',
            data: annonces
        })
    })
    .catch( err => {

        res.status(500).json({
            message: err,
            status: 500
        })
    })

}

};
