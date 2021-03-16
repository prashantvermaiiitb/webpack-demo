import _ from 'lodash';
import './style.css';
import Icon from './my-icon.png';
import CsvData from './data.csv';
import XmlData from './data.xml';
import JsonData from './data.json';

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

/**
 * There are problems with managing JavaScript projects this way:
 * It is not immediately apparent that the script depends on an external library.
 * If a dependency is missing, or included in the wrong order, the application will not function properly.
 * If a dependency is included but not used, the browser will be forced to download unnecessary code.
 * Let's use webpack to manage these scripts instead.
**/


console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

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

    let xmlDiv = document.createElement('div');
    xmlDiv.innerHTML = JSON.stringify(XmlData);
    xmlDiv.style.border = '3px solid red';
    xmlDiv.style.background = 'none';
    element.appendChild(xmlDiv);

    console.log('Csv Data', CsvData);
    console.log('JSON data', JsonData);

    return element;
}

document.body.appendChild(component());