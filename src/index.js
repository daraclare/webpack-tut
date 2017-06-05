import messages from './messages';
import Button from './button';
import Image from './image';

let newMessage = () => (`<p>${messages.hi} ${messages.event}</p>${Image}`);
// let newMessage = () => (Button.button);

let app = document.getElementById('app');
app.innerHTML = newMessage();

// Button.attachEl();

if(module.hot) {
  module.hot.accept();
}
