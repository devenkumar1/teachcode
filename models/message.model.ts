import mongoose from 'mongoose'

interface Imessage{
     _id?:mongoose.Types.ObjectId;
     content:String;
    senderId:mongoose.Types.ObjectId;
    receiverId:mongoose.Types.ObjectId;
    createdAt:Date;
     updatedAt:Date;
}

const messageSchema: mongoose.Schema<Imessage> = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    senderId:{
        type:mongoose.Schema.Types.ObjectId || String,
        default:"gemini"
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId || String,
        default:"gemini"
    },
    
},{timestamps:true})


const Message = mongoose.model<Imessage>("Message",messageSchema)

export default Message;
