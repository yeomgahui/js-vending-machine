describe('자판기 App Application 을 테스트한다.', () => {
  beforeEach(() => {
    cy.visit('../../index.html');
  });
  it('상품관리, 잔돈 충전, 상품 구매 버튼이 있다.', () => {
    cy.get('#product-manage-menu').should('exist');
    cy.get('#vending-machine-manage-menu').should('exist');
    cy.get('#product-purchase-menu').should('exist');
  });
})