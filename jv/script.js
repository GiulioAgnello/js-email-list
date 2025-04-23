let data;

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      data = response;
      const emailRandom = data.data.response;
      console.log(emailRandom);
    });
}
