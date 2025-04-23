// elementi da prendere nel dom

let emailList = document.getElementById("emailList");
const myButton = document.getElementById("button");

// constanti per axios
let data;
const randomaizeMail =
  "https://flynn.boolean.careers/exercises/api/random/mail";
let emailArray = [];

// ciclo con axios per le 10 email

let genEmail = () => {
  for (let i = 0; i < 10; i++) {
    axios.get(randomaizeMail).then((response) => {
      data = response;
      const emailRandom = data.data.response;

      emailArray.push(emailRandom);

      if (emailArray.length === 10) {
        console.log(emailArray);

        for (let i = 0; i < emailArray.length; i++) {
          currentMail = emailArray[i];

          emailList.innerHTML += `<li>${currentMail}</li>`;
        }
      }
    });
  }
};
const reset = () => {
  emailList.innerHTML = ``;
};
myButton.addEventListener("click", (e) => {
  e.preventDefault;
  emailArray = [];
  reset();
  genEmail();
});
