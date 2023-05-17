// const rootElement = document.documentElement;
var buttons = document.getElementsByClassName("toggle-button");
const seconTheme = document.getElementById('two');
const thirdTheme = document.getElementById('three');
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.body.classList = ":root";
    } else if (index == 1) {
      document.body.classList = "theme2";
      seconTheme.style.backgroundColor =  'hsl(6, 63%, 50%)';
    } else {
      document.body.classList = "theme3";
      thirdTheme.style.backgroundColor = ' hsl(176, 100%, 44%)';
    }
 
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});


const btn = document.querySelectorAll('button');
const display = document.querySelector('.display');
const char = ['/','+','-','*','=']

let output = ''

const calculate = (btnValue) => {
  if (btnValue === '=' & output !== '') {
    output = eval(output);
  }
  else if (btnValue === 'RESET') {
    output = ''
  } else if (btnValue === 'DEL'){
    output = output.toString().slice(0,-1);
  } else {
    if (output === '' && char.includes(btnValue))return;
    output += btnValue;
  }
  display.value = output;
}
btn.forEach((btn) => {
  btn.addEventListener('click',(e) => calculate(e.target.dataset.value));
})