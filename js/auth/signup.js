import { signSection, updateInputStyleByMsg } from "./signModule.js";
import { commonFncInsertTextContent } from "../common.js";

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
    if(!excuteEmailLogic(signSection.elementComponents.userEmailInput)){ return false; }
    if(!excutePasswordLogic(signSection.elementComponents.userPasswordInput)){ return false; }

    if(signSection.elementComponents.userPasswordInput.value !== signSection.elementComponents.userPasswordVerifyInput.value) {
        commonFncInsertTextContent(signSection.elementComponents.passwordVerifyValidationDiv, signSection.textMsgComponents.checkPasswordMatch);
        updateInputStyleByMsg();
        return false;
    }

    return true;
}

// 이메일 이벤트 -----------------------
signSection.elementComponents.userEmailInput.addEventListener('focusout', function() {
    excuteEmailLogic(this);
});

// 패스워드 이벤트 ---------------------
signSection.elementComponents.userPasswordInput.addEventListener('focusout', function() {
    excutePasswordLogic(this);
});

signSection.elementComponents.userPasswordVerifyInput.addEventListener('focusout', function() {
    signSection.passwordLogic.passwordInsertCheck(this);
});

signSection.elementComponents.passwordToggleButton.addEventListener('click', function() {
    signSection.passwordLogic.passwordViewToggle(this);
});

signSection.elementComponents.passwordVerifyToggleButton.addEventListener('click', function() {
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