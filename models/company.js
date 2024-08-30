const { default: mongoose } = require("mongoose");

// create a schema
const CompanySchema = new mongoose.Schema({
    name: String,
    location: String,
    email: String,
    phone: String,
    website: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    jobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job'
        }
    ]
})

// create a model and export it
module.exports = mongoose.model('Company', CompanySchema, 'companies');