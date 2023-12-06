import mongoose from 'mongoose'


const categorySchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
      },
})

const Category = model('Category', categorySchema);

export default Category;