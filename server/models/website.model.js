import mongoose from "mongoose"
import slugify from "slugify"
import { v4 as uuidv4 } from "uuid"

const messageSchema = new mongoose.Schema({
    role:{
        type:String,
        enum:["ai","user"],
        required:true 
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:true})

const websiteSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        default:"untitled Website"
    },
    latestCode:{
        type:String,
        required:true
    },
    conversation:[
        messageSchema
    ],
    deployed:{
        type:Boolean,
        default:false
    },
    deployUrl:{
        type:String,
    },
    slug:{
        type:String,
        unique:true,
        sparse:true
    }

},{timestamps:true})


websiteSchema.pre("save", async function () {
    if (!this.slug) {
        const base = this.title
            ? slugify(this.title, { lower: true, strict: true })
            : "website";
        const shortId = uuidv4().split("-")[0]; // 8-char hex
        this.slug = `${base}-${shortId}`;
    }
})

const website = mongoose.model("website",websiteSchema)
export default website