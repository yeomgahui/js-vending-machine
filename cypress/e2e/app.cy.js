import { SELECTOR } from '../../src/js/constants';

describe('자판기 App Application 을 테스트한다.', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('상품관리, 잔돈 충전, 상품 구매 버튼이 있다.', () => {
    cy.get(SELECTOR.PRODUCT_MANAGE_MENU).should('exist');
    cy.get(SELECTOR.VENDING_MACHINE_MANAGE_MENU).should('exist');
    cy.get(SELECTOR.PRODUCT_PURCHASE_MENU).should('exist');
  });

  it('첫 화면은 상품 관리 페이지가 보인다.', () => {
    cy.get(SELECTOR.PURCHASE_CONTAINER).should('exist');
    cy.get(SELECTOR.PURCHASE_INVENTORY).should('exist');
  });
});
