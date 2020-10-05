import constants from "../../../modules/constants";
import { 
    findOneUser,
    findUserByIdAndUpdate,
    findUserById,
    findUser
} from "../../repositories/user";



/*
    req = {
        body: {
            nickname
        }
    }
*/
export const postAddContact = async (req, res) => {
    try {   
        const { nickname: contactUserNickname } = req.body;
        const { _id: contactOwnerId } = req.currentUser;
        
        const contactUser = await findOneUser({ 
                nickname: contactUserNickname 
            },{
                nickname: false,
                profileColor: false,
                contacts: false,
                password: false
            }
        );

        if(contactUser && contactUser._id){
            const checkedContact = await findOneUser({
                _id: contactOwnerId,
                contacts: {
                    $elemMatch: { contactUserId: contactUser._id }
                }
            });
            if(checkedContact && checkedContact._id){
                throw new Error(constants.VALIDATION_MESSAGES.ALREADY_IN_CONTACTS);
            }
            await findUserByIdAndUpdate(
                contactOwnerId,
                { $addToSet: {
                        contacts: {  
                            contactUserId: contactUser._id
                        } 
                    } 
                }
            );
            res.status(200)
                .json({
                    success: true,
                    errors: {}
                });
        }else{
            res.status(401)
                .json({
                    success: false,
                    errors: constants.VALIDATION_MESSAGES.USER_WITH_SHICH_NICKNAME_DOESNT_EXIST
                });
        }
    }catch(error){
        res.status(500)
            .json({
                success: false,
                errors: error.message
            });
    }
}

/*
    req = {
        body: {
            _id
        }
    }
*/
export const deleteContact = async (req, res) => {  
    try{
        const { _id: deleteUserId } = req.body;
        const { _id: userId } = req.currentUser;

        await findUserByIdAndUpdate(userId, {
            $pull: { 
                contacts: {
                        contactUserId: deleteUserId
                } 
            }
        });
        res.status(200)
                .json({
                    success: true,
                    errors: {}
                });
    }catch(error){
        res.status(500)
            .json({
                success: false,
                errors: error.message
            });
    }
}


/*
    req = {
        body:{}
    }
*/
export const getContacts = async (req, res) => {
    try{
        const { _id } = req.currentUser;

        const user = await findUserById(_id);

        if(user && user._id){
            const contacts = await findUser({
                    _id: { $in: user.contacts.map(item => item.contactUserId) }
                },{
                    password: false,
                    contacts: false
                }
            );
            res.status(200)
                .json({
                    success: true,
                    result: contacts
                });
        }else{
            res.status(500)
                .json({
                    success: false,
                    errors:{}
                });    
        }    
    }catch(error){
        res.status(500)
            .json({
                success: false,
                errors: error.message
            });
    }
}

