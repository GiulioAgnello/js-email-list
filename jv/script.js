// elementi da prendere nel dom

const emailList = document.getElementById("emailList");
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
      console.log(emailArray);

      emailList.innerHTML = `<li>${emailArray[0]}</li>
    <li>${emailArray[1]}</li>
    <li>${emailArray[2]}</li>
    <li>${emailArray[3]}</li>
    <li>${emailArray[4]}</li>
    <li>${emailArray[5]}</li>
    <li>${emailArray[6]}</li>
    <li>${emailArray[7]}</li>
    <li>${emailArray[8]}</li>
    <li>${emailArray[9]}</li>
    `;
    });
  }
};

myButton.addEventListener("click", (e) => {
  e.preventDefault;
  genEmail();
});
// constanti per axios
// let data;
// const randomaizeMail =
//   "https://flynn.boolean.careers/exercises/api/random/mail";
// ciclo con axios per le 10 email

// axios.get(randomaizeMail).then((response) => {
//   data = response;
//   const emailRandom = data.data.response;
//   console.log(data.data.response);

//   emailList.innerHTML = `<li>${emailRandom}</li>
// `;
// });
