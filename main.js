let inputText = document.querySelector("#userInput");
let inputSubmit = document.querySelector("#submitButton");
let form1 = document.querySelector("#form1");

let baconCheckbox = document.querySelector("#bacon");

let wheatBreadCheckbox = document.querySelector("#wheatBread");

let lettuceCheckbox = document.querySelector("#lettuce");

let hamCheckbox = document.querySelector("#ham");

let turkeyCheckbox = document.querySelector("#turkey");

let tomatoesCheckbox = document.querySelector("#tomatoes");

let mayoCheckbox = document.querySelector("#mayo");

let spinachCheckbox = document.querySelector("#spinach");

let mozzerellaCheckbox = document.querySelector("#mozzerella");

let pestoCheckbox = document.querySelector("#pesto");

let form2 = document.querySelector("#form2");

let hairStylist = document.querySelector("#hairStylist");

let appt = document.querySelector("#appt");

let longHairRadio = document.querySelector("#longHair");

let shortHairRadio = document.querySelector("#shortHair");

let form3 = document.querySelector("#form3");

let username = document.querySelector("#username");

let email = document.querySelector("#email");

let password = document.querySelector("#password");

let password2 = document.querySelector("#password2");

let form4 = document.querySelector("#form4");


form1.addEventListener("submit", function(event){
    event.preventDefault();

    alert(inputText.value);

    inputText.value = '';
})

form2.addEventListener("submit", function(event){
    event.preventDefault();

    let message = "Your sandwich contains: "


    if(baconCheckbox.checked){
        message += "bacon, ";
    }if (wheatBreadCheckbox.checked){
        message += "wheat bread, ";
    } if (lettuceCheckbox.checked){
        message += "lettuce, ";
    } if (hamCheckbox.checked){
        message += "ham, ";
    }if (turkeyCheckbox.checked){
        message += "turkey, ";
    } if (tomatoesCheckbox.checked){
        message += "tomatoes, ";
    } if (mayoCheckbox.checked){
        message += "mayo, ";
    } if (spinachCheckbox.checked){
        message += "spinach, ";
    } if (mozzerellaCheckbox.checked){
        message += "mozzerella, ";
    } if (pestoCheckbox.checked){
        message += "pesto";
    }

    alert(message);
    baconCheckbox.checked = false;
    wheatBreadCheckbox.checked = false;
    lettuceCheckbox.checked = false; 
    hamCheckbox.checked = false;
    turkeyCheckbox.checked = false;
    tomatoesCheckbox.checked =false;
    mayoCheckbox.checked = false;
    spinachCheckbox.checked =false;
    mozzerellaCheckbox.checked =false;
    pestoCheckbox.checked =false;
})

form3.addEventListener("submit", function(event){
    event.preventDefault();

    let hairlength = ''
    if(longHairRadio.checked === true){
        hairlength = "Long";
    }else if(shortHairRadio.checked){
        hairlength = "Short";
    }
    

    let message = `Haircut scheduled for ${appt.value} with ${hairStylist.value} for ${hairlength} hair.`
    alert(message);
})

form4.addEventListener("submit", function(event){
    event.preventDefault();

    let bool = false;
    if(password.value === password2.value){
        bool = true;
    }else{
        bool = false;
    }
    

    let message = `Username: ${username.value} Email: ${email.value}`

    if(bool){
        alert(message);
    }else{
        alert("Passwords do not match!")
    }

    username.value = '';
    email.value = '';
    password.value = '';
    password2.value = '';
    
})