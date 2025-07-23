describe('Negative Test Cases - Create Account on Magento', () => {
  
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/'); // Buka halaman registrasi sebelum setiap test
    });
  
    it('Should show an error when email is empty', () => {
      cy.get('#firstname').type('John');
      cy.get('#lastname').type('Doe');
      cy.get('#email_address').clear(); // Kosongkan email
      cy.get('#password').type('Test@1234');
      cy.get('#password-confirmation').type('Test@1234');
      cy.get('button[title="Create an Account"]').click();
  
      // Verifikasi pesan error
      cy.contains('This is a required field.').should('be.visible');
    });
  
    it('Should show an error when password is too short', () => {
      cy.get('#firstname').type('John');
      cy.get('#lastname').type('Doe');
      cy.get('#email_address').type(`john.doe${Date.now()}@example.com`);
      cy.get('#password').type('Test1'); // Password kurang dari minimal karakter
      cy.get('#password-confirmation').type('Test1');
      cy.get('button[title="Create an Account"]').click();
  
      // Verifikasi pesan error
      cy.contains('Minimum length of this field must be 8 characters').should('be.visible');
    });
  
    it('Should show an error when password and confirmation do not match', () => {
      cy.get('#firstname').type('John');
      cy.get('#lastname').type('Doe');
      cy.get('#email_address').type(`john.doe${Date.now()}@example.com`);
      cy.get('#password').type('Test@1234');
      cy.get('#password-confirmation').type('WrongPassword'); // Password berbeda
      cy.get('button[title="Create an Account"]').click();
  
      // Verifikasi pesan error
      cy.contains('Please enter the same value again.').should('be.visible');
    });
  
    it('Should show an error when using an already registered email', () => {
      cy.get('#firstname').type('John');
      cy.get('#lastname').type('Doe');
      cy.get('#email_address').type('existinguser@example.com'); // Email sudah terdaftar
      cy.get('#password').type('Test@12');
      cy.get('#password-confirmation').type('Test@12');
      cy.get('button[title="Create an Account"]').click();
  
      // Verifikasi pesan error
      cy.contains('There is already an account with this email address').should('be.visible');
    });
  
  });
  