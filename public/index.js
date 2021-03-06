/* global VIRTUO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class = "centered">
          <output>${actor.who} ${actor.type} <br>${actor.amount}</br> </output>
        </div>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const car = VIRTUO.getCar();
    const begin = document.querySelector('#rental .group .js-begin').value;
    const end = document.querySelector('#rental .group .js-end').value;
    const distance = document.querySelector('#rental .group .js-distance').value;
    const option = document.querySelector('#rental .group .js-option').checked;
    const actors = VIRTUO.payActors(car, begin, end, distance, option);
    console.log(actors);

    render(actors);

    return;
  });
})();