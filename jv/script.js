// elementi da prendere nel dom

const emailList = document.getElementById("emailList");

// constanti per axios
let data;
const randomaizeMail =
  "https://flynn.boolean.careers/exercises/api/random/mail";
// ciclo con axios per le 10 email
for (let i = 0; i < 10; i++) {
  axios.get(randomaizeMail).then((response) => {
    data = response;
    const emailRandom = data.data.response;
    console.log(data.data.response);

    emailList.innerHTML = `<li>${emailRandom}</li>
    <li>${emailRandom}</li>
    <li>${emailRandom}</li>
    <li>${emailRandom}</li>
    <li>${emailRandom}</li>
    <li>${emailRandom}</li>
    <li>${emailRandom}</li>
    <li>${emailRandom}</li>
    <li>${emailRandom}</li>
    <li>${emailRandom}</li>`;
  });
}

console.log(emailList);
