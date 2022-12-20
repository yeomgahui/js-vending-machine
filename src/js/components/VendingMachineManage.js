import { $ } from '../utils';
import { SELECTOR, PAGE } from '../constants';

export default class VendingMachineManage extends HTMLElement {
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
    if (this.currentpage === PAGE.VENDING_MACHINE_MANAGE) {
      this.style.display = 'block';
    } else {
      this.style.display = 'none';
    }
  }

  connectedCallback() {
    const template = $(SELECTOR.VENDING_MANAGE_TEMPLATE);
    const content = template.content.firstElementChild.cloneNode(true);
    this.appendChild(content);
    this.updateTemplate();
  }

  attributeChangedCallback() {
    this.updateTemplate();
  }
}
