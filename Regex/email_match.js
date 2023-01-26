function validate_email(email) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.]?\w+)*\.\w{2,3}$/i;
  return regex.test(email);
}

console.log(validate_email("ariel@gmail.com")); // true
console.log(validate_email("ariel.gm@gmail.com")); // true
console.log(validate_email("ariel-gm@gmail.com")); // true
console.log(validate_email("ariel@gmail.domain.com")); // true
console.log(validate_email("ariel$sdsd@gmail.domain.com")); // true
