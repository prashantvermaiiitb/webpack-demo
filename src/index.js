
async function getComponent() {
  const element = document.createElement('div');
  // const anotherModule = await import('./another-module.js');
  // console.log(anotherModule.default);
  // element.innerHTML = "hello world" + anotherModule.default.print();

  const anotherModule = await (await import('./another-module')).default;
  // console.log(anotherModule);
  element.innerHTML = "hello world" + anotherModule.print();

  let button = document.createElement('button');
  button.innerHTML = 'click me!!';

  const loadClickHandler = async function () {
    console.log('click handler loaded');
    const clickHandler = await (await import('./clickhandler')).default;
    clickHandler.print.call(1, 2, 3, 4, 5);
  };

  //function () { alert('hello') };
  button.onclick = function () { console.log('click called'); loadClickHandler().then(() => { console.log('resolving the promise.') }) };

  element.appendChild(button);

  return element;

}

getComponent().then((component) => {
  document.body.appendChild(component);
});