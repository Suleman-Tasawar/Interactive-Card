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

        let CardHolderName = document.querySelector(".name");
        let CardHolderNum = document.querySelector(".number");
        let CardHolderMonth = document.querySelector(".month");
        let CardHolderYear = document.querySelector(".year");
        let CardHolderCvc = document.querySelector(".cvcs");

        //console.log(CardHolderName.value,CardHolderNum.value,CardHolderMonth.value,CardHolderYear.value,CardHolderCvc.value);
        let CardNameDisplay = document.querySelector(".CardNameShow");
        let CardNumDisplay = document.querySelector(".CardNumberShow");
        let CardCvcDisplay = document.querySelector(".CardCvcShow");
        let CardMonthYearDisplay = document.querySelector(".CardMonthYearShow");
        CardNameDisplay.textContent = CardHolderName.value;
        CardNumDisplay.textContent = CardHolderNum.value;
        CardCvcDisplay.textContent = CardHolderCvc.value;
        CardMonthYearDisplay.textContent = CardHolderMonth.value + "/" + CardHolderYear.value;
    }
    
    //Working on it!!!!       
});



