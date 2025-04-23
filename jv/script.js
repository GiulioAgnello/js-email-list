// elementi da prendere nel dom

const emailList = document.getElementById("emailList");

// constanti per axios
let data;
const randomaizeMail =
  "https://flynn.boolean.careers/exercises/api/random/mail";
let emailArray = [];
// ciclo con axios per le 10 email
for (let i = 0; i < 10; i++) {
  axios.get(randomaizeMail).then((response) => {
    data = response;
    const emailRandom = data.data.response;
    console.log(data.data.response);
    emailArray.push(emailRandom);
    console.log(emailArray);

    emailList.innerHTML = `<li>${emailArray[]}</li>
    `;
  });
}

console.log(emailList);

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
,,.