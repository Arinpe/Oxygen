function setFormMessage(formElement, type, message) {
    const messageElement=formElement.querySelector(".form__message");
    messageElement.textContent=Message;
    messageElement.classList.remove("form__message--success",form__message--console.error);
    messageElement.classList.add(form__message--${type})
    function setInputError(inputElement,message) {
        inputElement.classList.remove("form__input--error");
        inputElement.parentElement.querySelector("form__input-error-message").textContent="";
    }
    document.addEventListener("DOMContentLoaded",()=>{
        const createAccountForm =document.querySelector("createAccount");
        document querySelector("#linkCreateAccount").addEventListener("click"e=>{
            e.preveentDefault();
            createAccountForm.classList.remove
        })
    })
}