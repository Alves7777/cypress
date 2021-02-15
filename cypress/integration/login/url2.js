// const login = 'http://localhost:8000/cadastro;
cy.request('https://jsonplaceholder.typicode.com/comments').then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.have.length(500)
    expect(response).to.have.property('headers')
    expect(response).to.have.property('duration')



})        // cy.request({
            //                 login: 'http://localhost:8000',
            //                 headers: {
            //                     "site-login": "http://localhost:8000/555"
            //                 },
            //                     followRedirect: false   ,
            //             })
            //             cy.visit(login)

            // describe('Validation Request and Response', () => {
            //
            //     it('Validation request and response JSON', () => {
            //         cy.request({
            //             login: 'http://localhost:8000',
            //             headers: {
            //                 "site-login": "http://localhost:8000"
            //             },
            //                 followRedirect: false   ,
            //         })
            //         cy.visit(login)
                        // .should((response) => {
                        // expect(response.status).to.eq(200)
                        // expect(response).to.have.property('headers')
                        // expect(response).to.have.property('duration')
                        // let body = JSON.parse(response.body);
                        // expect(body).to.not.have.length(0)
                        // body.forEach(function (item) {
                        //     expect(item).to.have.all.keys('id', 'title', 'photo', 'description');
                        //     expect(item.id).to.not.be.empty
                        //     expect(item.title).to.not.be.empty
                        //     expect(item.photo).to.not.be.empty
                        //     expect(item.description).to.not.be.empty
                        // });

                    // });
            //     });
            // })

           // cy.get(data=cy)
            //cy.visit(login+'/ffgfgkfkfjfj');

                // cy.get('a[href="/cadastro"]').click();
                // cy.get('#name').type('Lucas Alves');
                // cy.get('#email').type('alves@gmail.com');
                // cy.get('#phone').type('8598782668');
                // cy.get('#enviar').click();
    //     });
    // });
