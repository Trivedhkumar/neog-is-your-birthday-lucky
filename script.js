const birthdayInput = document.getElementById("birthday");

const luckNumber = document.getElementById("lucky-number");
const message = document.getElementById("message");
const checkNumber = document.getElementById("check-number");
const setMessage = (str) => {
  message.style.display = "block";
  message.innerText = str;
};
const checkisBirthdayLucky = () => {
  message.style.display = "none";
  let dob = birthdayInput.value;

  if (!dob) {
    setMessage("Please select birthday");
    return;
  } else if (
    !luckNumber.value ||
    luckNumber.value <= 0 ||
    /\D/.test(luckNumber.value)
  ) {
    setMessage("Please enter positive lucky number");
    return;
  }
  const dobSum = sumDOB(dob);
  if (dobSum % luckNumber.value === 0) {
    setMessage("Yay you bithday is lucky");
    return;
  } else {
    setMessage("You have to make your own luck buddy");
  }
};
const sumDOB = (dob) => {
  const modifiedDate = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < modifiedDate.length; i++) {
    sum += Number(modifiedDate[i]);
  }
  return sum;
};
checkNumber.addEventListener("click", checkisBirthdayLucky);
