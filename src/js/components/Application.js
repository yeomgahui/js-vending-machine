import { SELECTOR, PAGE } from '../constants';
import { $, $all } from '../utils';

export default class App extends HTMLElement {
  constructor() {
    super();
    this.state = {
      currentpage: PAGE.PRODUCT_MANAGE,
    };
    this.template = $(SELECTOR.VENDING_TEMPLATE);
  }

  selectPage(selectedPage) {
    this.state.currentpage = selectedPage;
    this.syncAttributes();
  }

  syncAttributes() {
    this.productManage.currentpage = this.state.currentpage;
    this.vendingMachineManage.currentpage = this.state.currentpage;
    this.productPurchase.currentpage = this.state.currentpage;
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      const content = this.template.content.firstElementChild.cloneNode(true);
      this.appendChild(content);

      $all('.navigation', this).forEach(($el) => {
        $el.addEventListener('click', (e) => {
          this.selectPage(e.target.value);
        });
      });

      this.productManage = $('product-manage', this);
      this.vendingMachineManage = $('vending-machine-manage', this);
      this.productPurchase = $('product-purchase', this);
      this.syncAttributes();
    });
  }
}
