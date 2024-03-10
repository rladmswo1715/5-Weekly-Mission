import { emailCheck } from "../common.js";

const inputBoxArray = document.querySelectorAll('input');
let textMsg = '';

const loginSection = {
    OBJS : {
        userEmail : document.querySelector("#user-email"),
        userPassword : document.querySelector("#user-password"),
        idValidationDiv : document.querySelector("#id-validation-msg"),
        passwordValidationDiv : document.querySelector("#pwd-validation-msg"),
        passwordToggleBtn : document.querySelector("#view-password")
    },

    loginValidation : function() {
        if(loginSection.OBJS.userEmail.value !== 'test@codeit.com' || loginSection.OBJS.userPassword.value !== 'codeit101'){
            loginSection.OBJS.idValidationDiv.textContent = "이메일을 확인해주세요.";
            loginSection.OBJS.passwordValidationDiv.textContent = "비밀번호를 확인해주세요.";
            return false;
        }
        return true;
    },

    emailLogic : {
        emailValidation : function(inputElement) {
            if(inputElement.value === ''){
                return textMsg = '이메일을 입력해 주세요.';
            }else{
                return !emailCheck(inputElement.value) ? textMsg = '올바른 이메일 주소가 아닙니다.' : textMsg = '';
            }
        }
    },

    passwordLogic : {
        passwordValidation : function(inputElement) {
            if(inputElement.value === ''){
                return textMsg = '비밀번호를 입력해 주세요.';
            }
        },

        passwordViewToggle : function(inputElement) {
            loginSection.OBJS.userPassword.getAttribute('type') === 'password' ? 
                loginSection.OBJS.userPassword.type = 'text' : loginSection.OBJS.userPassword.type = 'password';
            
            inputElement.classList.toggle('pwd-eye-on');
        }
    }
}

// 로그인 정보 입력 이벤트
inputBoxArray.forEach(function(inputBox) {
    inputBox.addEventListener('focusout',function(){
        if(this.id === 'user-email'){
            loginSection.emailLogic.emailValidation(this);
            loginSection.OBJS.idValidationDiv.textContent = textMsg;
        }else if(this.id === 'user-password'){
            loginSection.passwordLogic.passwordValidation(this);
            loginSection.OBJS.passwordValidationDiv.textContent = textMsg;
        }
        textMsg = '';
    });
});

// 로그인 정보 Submit
document.querySelector("#frm-linkbrary-login").addEventListener('submit',(e) => {
    if(!loginSection.loginValidation()){
        e.preventDefault();
    }
});

// 패스워드 보이기
loginSection.OBJS.passwordToggleBtn.addEventListener('click', function(){
    loginSection.passwordLogic.passwordViewToggle(this);
});