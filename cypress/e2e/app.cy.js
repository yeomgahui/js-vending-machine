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
    cy.get(SELECTOR.PRODUCT_CONTAINER).should('exist');
  });

  context('메뉴 버튼을 테스트한다.', () => {
    it('상품 관리 버튼을 클릭하면, 상품 관리 페이지가 보인다.', () => {
      cy.get(SELECTOR.PRODUCT_MANAGE_MENU).click();
      cy.get(SELECTOR.PRODUCT_CONTAINER).should('exist');
    });

    it('잔돈 충전 버튼을 클릭하면, 잔돈 충전 페이지가 보인다.', () => {
      cy.get(SELECTOR.PRODUCT_MANAGE_MENU).click();
      cy.get(SELECTOR.VENDING_MACHING_WRAPPER).should('exist');
    });
  });
});
