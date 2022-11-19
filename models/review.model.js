import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
    product: {type: mongoose.Schema.ObjectId, ref: 'Product', required: true},
	rating: {type: Number, required: true},
    description: String
});

export default mongoose.model('Review', reviewSchema);