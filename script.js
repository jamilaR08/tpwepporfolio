const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector("btn");


console.log(nom);
console.log(email);
console.log(password);
console.log(button);


button.addEventListener("click", function(event){
    event.preventDefault();
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);

const user={
    name: nom.value,
    email: email.value,
    password: password.value
};
localStorage.setItem('user',JSON.stringify(user));


    alert("Name: " + nom.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
});

