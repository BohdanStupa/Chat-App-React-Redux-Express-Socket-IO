import React from "react";
import { FormContainer } from "shared/containers";
import {
    InputFormComponent,
    ButtonComponent
} from "shared/components";
import constants from "modules/constants";


function SignUpFormContainer(){
    const { 
        NICKNAME,
        PASSWORD,
        CONFIRM_PASSWORD, 
        SIGNUP
    } = constants.LABELS.AUTH;
    
    const height = "2.5rem";
    const marginTop = "1rem";
    
    return (
        <FormContainer>
            <InputFormComponent
                type="text"
                value={NICKNAME}
                height={height}
            />

            <InputFormComponent
                type="text"
                value={PASSWORD}
                height={height}
            />

            <InputFormComponent
                type="text"
                value={CONFIRM_PASSWORD}
                height={height}
            />

            <ButtonComponent
                text={SIGNUP}
                height={height}
                marginTop={marginTop}

            />
        </FormContainer>
        );
}

export default SignUpFormContainer;