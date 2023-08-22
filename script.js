const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirmenet-list li")


const requirements = [
    { regex: /.{8,}/, index: 0 }, // En az 8 karakter uzunluğunda
    { regex: /[0-9]/, index: 1 }, // En az 1 sayı (0...9)
    { regex: /[a-z]/, index: 2 }, // En az 1 küçük harf (a...z)
    { regex: /[^A-Za-z0-9]/, index: 3 }, // En az 1 özel sembol (!...$)
    { regex: /[A-Z]/, index: 4 }, // En az 1 büyük harf (A...Z)
]

passwordInput.addEventListener("keyup", (e) =>{
    requirements.forEach(item => {
        // Check if the password matches the requirement regex
        // Parolanın normal ifade gereksinimiyle eşleşip eşleşmediğini kontrol edin
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Updating icon of requirement item if requirement matched or not
        // Eğer gereksinim karşılanmışsa gereksinim öğesinin simgesini güncelleme.
        if(isValid){
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        }else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }

    })
});

eyeIcon.addEventListener("click", () => {

    // Toggle the password input type between "password" and "text"
    // Parola giriş türünü "password" ve "text" arasında değiştir
    passwordInput.type =  passwordInput.type === "password" ? "text" : "password"; 

    // Update the eye icon class based on the password "input" type
    //Göz simgesi sınıfını parola input türüne göre güncelleyin
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`
});
