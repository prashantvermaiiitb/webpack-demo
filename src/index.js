
async function getComponent() {
  const element = document.createElement('div');
  const anotherModule = await (await import('./another-module')).default;

  element.innerHTML = "hello world" + anotherModule.print();
  return element;

}

getComponent().then((component) => {
  document.body.appendChild(component);
});