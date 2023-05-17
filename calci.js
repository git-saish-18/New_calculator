function check() {
  const regex = /^[0-9]/;
  let input = document.form1.text1.value;
  if (!regex.test(input)) {
    alert("Enter the Number Only");
    setTimeout(() => {
      document.form1.text1.value = "";
      document.form1.text2.value = "";
      document.form1.text3.value = "";
    }, 100);
  }
}

function calculate() {
  let num1 = document.form1.text1.value;
  let num2 = document.form1.text2.value;
  let check = document.form1.group.value;
  if (num1 == "" || num2 == "") {
    alert("please enter number");
    return false;
  }
  if (check == "") {
    alert("please select one of the method");
    return false;
  }
  switch (check) {
    case "Add":
      document.form1.text3.value = parseInt(num1) + parseInt(num2);
      break;
    case "Sub":
      document.form1.text3.value = parseInt(num1) - parseInt(num2);
      break;
    case "Mul":
      document.form1.text3.value = parseInt(num1) * parseInt(num2);
      break;
    case "Div":
      document.form1.text3.value = parseInt(num1) / parseInt(num2);
      break;
    default:
      break;
  }
}
