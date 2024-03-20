import { signSection, updateInputStyleByMsg } from "./signModule.js";
import { commonFncInsertTextContent } from "../utils/common.js";

const elements = signSection.elementComponents;
const inputBoxArray = document.querySelectorAll('input');

const signinValidation = function() {
    if(elements.userEmailInput.value !== 'test@codeit.com' || elements.userPasswordInput.value !== 'codeit101'){
        commonFncInsertTextContent(elements.idValidationDiv, signSection.textMsgComponents.checkEmail);
        commonFncInsertTextContent(elements.passwordValidationDiv, signSection.textMsgComponents.checkPassword);
        updateInputStyleByMsg();
        return false;
    }
    return true;
}

// 로그인 정보 입력 이벤트
inputBoxArray.forEach(function(inputBox) {
    inputBox.addEventListener('focusout',function() {
        if(this.id === 'user-email'){
            signSection.emailLogic.emailValidation(this);
        }else if(this.id === 'user-password'){
            signSection.passwordLogic.passwordInsertCheck(this);
        }
    });
});

// 로그인 정보 Submit
document.querySelector("#frm-linkbrary-login").addEventListener('submit',(e) => {
    e.preventDefault();

    if(signinValidation()){
        e.currentTarget.submit();
    }
});

// 패스워드 보이기
elements.passwordToggleButton.addEventListener('click', function() {
    signSection.passwordLogic.passwordViewToggle(this);
});