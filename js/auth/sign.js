import { emailCheck } from "../validation.js";

const inputBoxArray = document.querySelectorAll('input');

const loginSection = {
    components : {
        userEmailInput : document.querySelector("#user-email"),
        userPasswordInput : document.querySelector("#user-password"),
        idValidationDiv : document.querySelector("#id-validation-msg"),
        passwordValidationDiv : document.querySelector("#pwd-validation-msg"),
        passwordToggleButton : document.querySelector("#view-password")
    },

    loginValidation : function() {
        if(loginSection.components.userEmailInput.value !== 'test@codeit.com' || loginSection.components.userPasswordInput.value !== 'codeit101'){
            loginSection.components.idValidationDiv.textContent = "이메일을 확인해 주세요.";
            loginSection.components.passwordValidationDiv.textContent = "비밀번호를 확인해 주세요.";
            return false;
        }
        return true;
    },

    emailLogic : {
        emailValidation : function(inputElement) {
            const emailValidationMsgElement = loginSection.components.idValidationDiv;

            if(inputElement.value === ''){
                emailValidationMsgElement.textContent = "이메일을 입력해 주세요.";
            }else{
                !emailCheck(inputElement.value) ? 
                emailValidationMsgElement.textContent = '올바른 이메일 주소가 아닙니다.' : emailValidationMsgElement.textContent = '';
            }
        }
    },

    passwordLogic : {
        passwordValidation : function(inputElement) {
            const passwordValidationMsgElement = loginSection.components.passwordValidationDiv;

            inputElement.value === '' ?
                passwordValidationMsgElement.textContent = '비밀번호를 입력해 주세요.' : passwordValidationMsgElement.textContent = '';
            
        },

        passwordViewToggle : function(inputElement) {
            const passwordInputBoxElement = loginSection.components.userPasswordInput;

            passwordInputBoxElement.getAttribute('type') === 'password' ? 
            passwordInputBoxElement.type = 'text' : passwordInputBoxElement.type = 'password';
            
            inputElement.classList.toggle('pwd-eye-on');
        }
    }
}

// 로그인 정보 입력 이벤트
inputBoxArray.forEach(function(inputBox) {
    inputBox.addEventListener('focusout',function(){
        if(this.id === 'user-email'){
            loginSection.emailLogic.emailValidation(this);
        }else if(this.id === 'user-password'){
            loginSection.passwordLogic.passwordValidation(this);
        }
    });
});

// 로그인 정보 Submit
document.querySelector("#frm-linkbrary-login").addEventListener('submit',(e) => {
    if(!loginSection.loginValidation()){
        e.preventDefault();
    }
});

// 패스워드 보이기
loginSection.components.passwordToggleButton.addEventListener('click', function(){
    loginSection.passwordLogic.passwordViewToggle(this);
});