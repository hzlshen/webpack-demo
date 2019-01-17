import _ from 'lodash';
import printMe from './print.js'

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello,','webpack'],' ');
  element.classList.add('hello');

  var newIcon = new Image();
  newIcon.src = Icon;
  element.appendChild(newIcon);
  return element;
  const we = '2222';
}

document.body.appendChild(component());