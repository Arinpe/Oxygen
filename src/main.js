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

         setFormMessage("error", "Invalid username/password combination");
        });
    
        document.querySelectorAll(".form__input").forEach(inputElement => {
            inputElement.addEventListener("blur", e => {
                if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                    setInputError(inputElement, "Username must be at least 5 characters in length");
                }
            });
    
            inputElement.addEventListener("input", e => {
                clearInputError(inputElement);
            });
        });
    });
    })
}