import messages from './messages';

let app = document.getElementById('app');
app.innerHTML = messages.hi + ' ' + messages.event ;

if(module.hot) {
  module.hot.accept();
}
