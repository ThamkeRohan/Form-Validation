class Validation{
    isUsernameValid(username){
        let re = new RegExp("^[a-zA-Z0-9._]{4,20}$")
        return re.test(username);
    }
    isPhoneNumberValid(phoneNumber){
        let re = new RegExp("^[0-9]{10}$")
        return re.test(phoneNumber);
    }
    isEmailValid(email){
        let re = new RegExp("^[a-z0-9]+@[a-z]+.[a-z]{2,3}$");
        return re.test(email);
    }
    isPasswordValid(password){
        let re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    }
}

export default Validation;