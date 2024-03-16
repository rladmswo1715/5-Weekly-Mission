import { elementComponents, textMsgComponents } from "./signComponentsModule.js";
import { emailCheck, passwordCheck } from "../validation.js";
import { commonFncInsertTextContent } from "../common.js";

export const signSection = {

    elementComponents : elementComponents,
    textMsgComponents : textMsgComponents,

    emailLogic : {
        emailValidation : function(inputElement) {
            const emailValidationMsgElement = signSection.elementComponents.idValidationDiv;
            let returnBooleanData = false;

            if(inputElement.value === ''){
                commonFncInsertTextContent(emailValidationMsgElement, textMsgComponents.checkInputEmail);
            }else{
                returnBooleanData = emailCheck(inputElement.value);
                commonFncInsertTextContent(emailValidationMsgElement, textMsgComponents.checkValidationEmail, '', !returnBooleanData);
            }

            updateInputStyleByMsg();
            return returnBooleanData;
        },

        checkDuplicateEmail : function(inputElement) {
            if(inputElement.value === 'test@codeit.com'){
                commonFncInsertTextContent(signSection.elementComponents.idValidationDiv, textMsgComponents.findDuplicateEmail);
                updateInputStyleByMsg();
                return false;
            }
            return true;
        }
    },

    passwordLogic : {
        passwordInsertCheck : function(inputElement) {
            let passwordValidationMsgElement = '';
            if(inputElement.id === 'user-password'){
                passwordValidationMsgElement = signSection.elementComponents.passwordValidationDiv;
            }else if(inputElement.id === 'verify-password'){
                passwordValidationMsgElement = signSection.elementComponents.passwordVerifyValidationDiv;
            }
            commonFncInsertTextContent(passwordValidationMsgElement, textMsgComponents.checkInputPassword, '', inputElement.value === '');
            updateInputStyleByMsg();

            return !(inputElement.value === '');
        },

        passwordValidation : function(inputElement) {
            let passwordRegexCheck = passwordCheck(inputElement.value);
            commonFncInsertTextContent(signSection.elementComponents.passwordValidationDiv, textMsgComponents.checkValidationPassword, '', !passwordRegexCheck);
            updateInputStyleByMsg();

            return passwordRegexCheck;
        },

        passwordViewToggle : function(inputElement) {
            let passwordInputBoxElement = '';
            if(inputElement.id === 'view-password'){
                passwordInputBoxElement = signSection.elementComponents.userPasswordInput;
            }else if(inputElement.id === 'view-verify-password'){
                passwordInputBoxElement = signSection.elementComponents.userPasswordVerifyInput;
            }

            passwordInputBoxElement.getAttribute('type') === 'password' ? 
                passwordInputBoxElement.type = 'text' : passwordInputBoxElement.type = 'password';
            
            inputElement.classList.toggle('pwd-eye-on');
        }
    }
}

export const updateInputStyleByMsg = function(){

    const arrayDivEl = [elementComponents.idValidationDiv, 
                        elementComponents.passwordValidationDiv, 
                        elementComponents.passwordVerifyValidationDiv];

    const arrayInputBoxEl = [elementComponents.userEmailInput,
                             elementComponents.userPasswordInput,
                             elementComponents.userPasswordVerifyInput];
    
    arrayDivEl.forEach((divEl, i) => {
        if(divEl.textContent.length > 0){
            arrayInputBoxEl[i].classList.add('err-box');
        }else{
            arrayInputBoxEl[i].classList.contains('err-box') ? 
                arrayInputBoxEl[i].classList.remove('err-box') : undefined ;
        }
    });

}