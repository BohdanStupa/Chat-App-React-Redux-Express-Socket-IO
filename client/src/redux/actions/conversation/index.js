import {
    GET_CONVERSATIONS_REQUEST,
    GET_CONVERSATIONS_SUCCESS,
    GET_CONVERSATIONS_FAIL,
    GET_CURRENT_CONVERSATION_REQUEST,
    GET_CURRENT_CONVERSATION_SUCCESS,
    GET_CURRENT_CONVERSATION_FAIL,
    GET_CURRENT_CONVERSATION_NO,
    SET_UNREAD_MESSAGES_INCONVERSATIONS,
    SET_IS_SCROLLING_INCONVERSATIONS
} from "redux/constants/conversation";

export const getConversationsRequest = token => {
    return {
        type: GET_CONVERSATIONS_REQUEST,
        payload: token
    };
}

export const getConversationsSuccess = data => {
    return {
        type: GET_CONVERSATIONS_SUCCESS,
        payload: data
    };
}

export const getConversationsFail = error => {
    return {
        type: GET_CONVERSATIONS_FAIL,
        payload: error
    };
}


export const getCurrentConversationRequest = conversation => {
    return {
        type: GET_CURRENT_CONVERSATION_REQUEST,
        payload: conversation
    };
}

export const getCurrentConversationSuccess = data => {
    return {
        type: GET_CURRENT_CONVERSATION_SUCCESS,
        payload: data
    };
}

export const getCurrentConversationFail = error => {
    return {
        type: GET_CURRENT_CONVERSATION_FAIL,
        payload: error
    };
}

export const getCurrentConversationNo = () => {
    return {
        type: GET_CURRENT_CONVERSATION_NO
    };
}

export const setUnreadMessagesInConversationsRequest = data => {
    return {
        type: SET_UNREAD_MESSAGES_INCONVERSATIONS,
        payload: data
    };
}

export const setIsScrollingRequest = () => {
    return {
        type: SET_IS_SCROLLING_INCONVERSATIONS,
    };
}

