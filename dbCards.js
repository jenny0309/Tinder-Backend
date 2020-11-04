import mongoose from 'mongoose'

// set up data schema on db

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

// NoSQL: collection > [documents] > collection > [documents] > collection
export default mongoose.model('cards', cardSchema)