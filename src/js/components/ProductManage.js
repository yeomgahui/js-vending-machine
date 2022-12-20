import { $ } from '../utils';
import { SELECTOR, PAGE } from '../constants';

export default class ProductManage extends HTMLElement {
  static get observedAttributes() {
    return ['currentpage'];
  }

  get currentpage() {
    return this.getAttribute('currentpage');
  }

  set currentpage(value) {
    this.setAttribute('currentpage', value);
  }

  updateTemplate() {
    if (this.currentpage === PAGE.PRODUCT_MANAGE) {
      this.style.display = 'block';
    } else {
      this.style.display = 'none';
    }
  }

  connectedCallback() {
    const template = $(SELECTOR.PRODUCT_MANAGE_TEMPLATE);
    const content = template.content.firstElementChild.cloneNode(true);
    this.appendChild(content);
    this.updateTemplate();
  }

  attributeChangedCallback() {
    this.updateTemplate();
  }
}
