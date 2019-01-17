import _ from 'lodash';
import printMe from './print.js'

function component() {
  const element = document.createElement('div');
  let btn = document.createElement("button");

  element.innerHTML = _.join(['Hello,','webpack'],' ');
  element.classList.add('hello');

  btn.innerHTML = "console.log";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());