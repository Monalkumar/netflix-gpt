    export const checkValidData = (email,password,name)=>{
    const isEmailValid = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z]+[a-zA-Z]+$/.test(name);
    if(!isEmailValid) return "Email id is not valid";
    if(!isPasswordValid) return "password is not valid";
    if(!isNameValid) return "Name is  not  valid";

    return null
}