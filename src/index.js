import _ from 'lodash';
import './style.css';
import Icon from './my-icon.png';
import CsvData from './data.csv';
import XmlData from './data.xml';

/**
 * There are problems with managing JavaScript projects this way:
 * It is not immediately apparent that the script depends on an external library.
 * If a dependency is missing, or included in the wrong order, the application will not function properly.
 * If a dependency is included but not used, the browser will be forced to download unnecessary code.
 * Let's use webpack to manage these scripts instead.
**/


function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    console.log(Icon);
    myIcon.style.border = '2px solid #caca';
    element.appendChild(myIcon);

    console.log('Xml Data', XmlData);
    console.log('Csv Data', CsvData);

    return element;
}

document.body.appendChild(component());