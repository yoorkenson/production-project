describe('Пользователь заходит на страницу списка статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    it('и статьи подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
