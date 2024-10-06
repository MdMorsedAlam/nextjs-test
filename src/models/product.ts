import mongoose ,{Document, Schema} from 'mongoose';

export interface IProduct extends Document{
    name: string,
    price: number,
    description: string
}
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    }
})

const product= mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema)

export default product;