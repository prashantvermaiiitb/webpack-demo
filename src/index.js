
async function getComponent() {
  const element = document.createElement('div');
  // const anotherModule = await import('./another-module.js');
  // console.log(anotherModule.default);
  // element.innerHTML = "hello world" + anotherModule.default.print();

  const anotherModule = await (await import(
    /* webpackChunkName: "another-module" */
    /* webpackPreload: true */
    './another-module')).default;
  // console.log(anotherModule);
  element.innerHTML = "hello world" + anotherModule.print();

  let button = document.createElement('button');
  button.innerHTML = 'click me!!';

  const loadClickHandler = async function () {
    console.log('click handler loaded');
    //this will put the prefetch in the DOM from the client end
    const clickHandler = await (await import(/* webpackPrefetch: true */ './clickhandler')).default;
    clickHandler.print.call(1, 2, 3, 4, 5);
  };

  //function () { alert('hello') };
  button.onclick = function () { console.log('click called'); loadClickHandler().then(() => { console.log('resolving the promise.') }) };

  element.appendChild(button);

  let button1 = document.createElement('button');
  button1.innerHTML = 'click me!!';

  const preloadClickHandler = async function () {
    console.log('click handler loaded');
    //this will put the prefetch in the DOM from the client end
    const clickHandler = await (await import(/* webpackPreload: true */ './pre-load-handler')).default;
    clickHandler.print.call(5, 4, 3, 2, 1);
  };

  //function () { alert('hello') };
  button1.onclick = function () { console.log('click called'); preloadClickHandler().then(() => { console.log('resolving the promise.') }) };

  element.appendChild(button1);

  return element;

}

getComponent().then((component) => {
  document.body.appendChild(component);
});