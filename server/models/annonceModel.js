const mongoose=require('mongoose')
const Schema=mongoose.Schema
const annonceSchema= new Schema({


titre:{

    type:String,
    required:true
},
tel:{

    type:String,
    
},
email:{

    type:String,
    required:true
},

description:{
    
    type:String,
    required:true
},

gouvernorat:{
    
    type:String,
    required:true
},

emplacement:{

type:String,
required:true

},

categorie:{

type:String,
required:true

},
groupe_sanguin:{

type:String,
required:true

},


user:{

type:mongoose.Schema.Types.ObjectId,
ref:'User'

},



},

{timestamps:true}// date de creation et de mise a jour de schema 
)


module.exports= mongoose.model('annonce', annonceSchema)