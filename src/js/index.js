import ProductManage from './components/ProductManage';
import VendingMachineManage from './components/VendingMachineManage';
import ProductPurchase from './components/ProductPurchase';
import App from './components/Application';

window.customElements.define('vending-app', App);
window.customElements.define('product-manage', ProductManage);
window.customElements.define('vending-machine-manage', VendingMachineManage);
window.customElements.define('product-purchase', ProductPurchase);
