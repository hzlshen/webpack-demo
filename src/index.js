import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg'

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello,','webpack'],' ');
  element.classList.add('hello');

  var newIcon = new Image();
  newIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());