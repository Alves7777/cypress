const login = 'http://localhost:8000';
    describe('login', () => {
        it('visitar a login correta', () => {
            cy.visit(login);
            cy.get('a[href="/cadastro"]').click();
            cy.get('#name').type('Lucas Alves');
            cy.get('#email').type('alves@gmail.com');
            cy.get('#phone').type('8598782668');
            cy.get('#enviar').click();
        })
    });
