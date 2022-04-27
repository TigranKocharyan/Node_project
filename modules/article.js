const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({

    
    title :{
        type: String,
        required : true
     },
     content : {
         type: String,
         required : true
         
     },
     markdown :{
         type: String,
         required : true
         
     },
     creatDate:{
         type: Date,
         default: () => Date.now()
     }
     
})
module.exports = mongoose.model('Article', articleSchema)