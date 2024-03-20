import { signSection, updateInputStyleByMsg } from "./signModule.js";
import { commonFncInsertTextContent } from "../utils/common.js";

const elements = signSection.elementComponents;

const excuteEmailLogic = function(element) {
    const checkInputEmail = signSection.emailLogic.emailValidation(element);
    if(checkInputEmail) { return signSection.emailLogic.checkDuplicateEmail(element); }
    else { return false };
}

const excutePasswordLogic = function(element) {
    const checkInputPassword = signSection.passwordLogic.passwordInsertCheck(element);
    if(checkInputPassword) { return signSection.passwordLogic.passwordValidation(element); }
    else { return false };
}

const signupValidation = function() {
    if(!excuteEmailLogic(elements.userEmailInput)){ return false; }
    if(!excutePasswordLogic(elements.userPasswordInput)){ return false; }

    if(elements.userPasswordInput.value !== elements.userPasswordVerifyInput.value) {
        commonFncInsertTextContent(elements.passwordVerifyValidationDiv, signSection.textMsgComponents.checkPasswordMatch);
        updateInputStyleByMsg();
        return false;
    }

    return true;
}

// 이메일 이벤트 -----------------------
elements.userEmailInput.addEventListener('focusout', function() {
    excuteEmailLogic(this);
});

// 패스워드 이벤트 ---------------------
elements.userPasswordInput.addEventListener('focusout', function() {
    excutePasswordLogic(this);
});

elements.userPasswordVerifyInput.addEventListener('focusout', function() {
    signSection.passwordLogic.passwordInsertCheck(this);
});

elements.passwordToggleButton.addEventListener('click', function() {
    signSection.passwordLogic.passwordViewToggle(this);
});

elements.passwordVerifyToggleButton.addEventListener('click', function() {
    signSection.passwordLogic.passwordViewToggle(this);
});
// ------------------------------------

// 회원가입 정보 Submit
document.querySelector("#frm-linkbrary-signup").addEventListener('submit',(e) => {
    e.preventDefault();
    if(signupValidation()){
        e.currentTarget.submit();
    }
});