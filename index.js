//To select the elements to check validity

let form = document.querySelector("form");
let card__name = document.querySelector(".name");
let card__num = document.querySelector(".number");
let card__month = document.querySelector(".month");
let card__year = document.querySelector(".year");
let card__cvc = document.querySelector(".cvcs");

//Selecting the para to show validity if not correct
let name__error = document.querySelector("#name__error");
let num__error = document.querySelector("#num__error");
let month__error = document.querySelector("#month__error");
let year__error = document.querySelector("#year__error");
let cvc__error = document.querySelector("#cvc__error");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (card__name.checkValidity() && card__num.checkValidity() && card__month.checkValidity() && card__year.checkValidity() && card__cvc.checkValidity()) {
        
        let sucess = document.querySelector(".sucessfull__page");
        sucess.style.display = "block";
        let close__sucess = document.querySelector(".close__button");
        close__sucess.addEventListener("click", () => {
            sucess.style.display = "none";
        })
    }

    else {
        sucess.style.display = "none";

        if (!card__name.checkValidity()) {
                
            name__error.innerHTML = "<p>Enter correct Name</p>";
        } else {
            name__error.innerHTML = "";
        }


        if (!card__num.checkValidity()) {
                
            num__error.innerHTML = "<p>Enter correct Card Number</p>";
         } else {
            num__error.innerHTML = "";
        }

        if (!card__month.checkValidity()) {
                
            month__error.innerHTML = "<p>Enter correct Expiry Month</p>";
        } else {
            month__error.innerHTML = "";
        }

        if (!card__year.checkValidity()) {
                
            year__error.innerHTML = "<p>Enter correct Expiry Year</p>";
        } else {
            year__error.innerHTML = "";
        }

        if (!card__cvc.checkValidity())
        {
                
            cvc__error.innerHTML = "<p>Enter correct CVC</p>";
        } else {
            cvc__error.innerHTML = "";
        }
        }
});


