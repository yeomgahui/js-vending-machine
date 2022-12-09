import { $ } from './utils';
alert('test');

const render = () => {
  window.requestAnimationFrame(() => {
    console.log('render');
    const app = $('#app');
    const newApp = app.cloneNode(true);
    newApp.innerHTML = `<div class="purchase-container">
	<h3>충전하기</h3>
	<div class="vending-machine-wrapper">
		<input type="number" name="charge-amount" id="charge-input" />
		<button id="charge-button">충전하기</button>
	</div>
	<p>충전 금액: <span id="charge-amount">0</span>원</p>
</div>`;
    app.replaceWith(newApp);
  });
};

render();
