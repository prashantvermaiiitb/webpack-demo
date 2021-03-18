
async function getComponent() {
  const element = document.createElement('div');
  // const anotherModule = await import('./another-module.js');
  // console.log(anotherModule.default);
  // element.innerHTML = "hello world" + anotherModule.default.print();

  const anotherModule = await (await import('./another-module.js')).default;
  // console.log(anotherModule);
  element.innerHTML = "hello world" + anotherModule.print();

  // let button = document.createElement('button')
  // button.click = async function () {
  //   const clickHandler = await import('./clickhandler.js').default;
  //   clickHandler.print.call(1, 2, 3, 4, 5);
  // };
  // element.appendChild(button);

  return element;

}

getComponent().then((component) => {
  document.body.appendChild(component);
});