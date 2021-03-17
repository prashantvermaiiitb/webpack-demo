import _ from 'lodash';
import './style.css';
import printMe from './print.js';
/**
 * There are problems with managing JavaScript projects this way:
 * It is not immediately apparent that the script depends on an external library.
 * If a dependency is missing, or included in the wrong order, the application will not function properly.
 * If a dependency is included but not used, the browser will be forced to download unnecessary code.
 * Let's use webpack to manage these scripts instead.
**/


function component() {
  const element = document.createElement('div');

  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());