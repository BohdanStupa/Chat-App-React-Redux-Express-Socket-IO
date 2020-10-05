import { model } from "mongoose";
import MessageModel from "../../models/message";

export const addMessage = model => {
    const newMessage = MessageModel({
        senderId: model.senderId,
        receivedId: model.receivedId,
        message: model.message,
        dateTime: model.dateTime
    });
    return newMessage.save();
}

export const getUserMessage = model => MessageModel.findOne(model);

export const deleteUserMessage = query => MessageModel.deleteMany(query);