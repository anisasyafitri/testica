describe('Create Account on Magento', () => {
  it('Should successfully create an account', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/'); // Buka halaman pendaftaran
    
    // Mengisi form pendaftaran
    cy.get('#firstname').type('John'); // Isi nama depan
    cy.get('#lastname').type('Doe'); // Isi nama belakang
    cy.get('#email_address').type(`john.doe${Date.now()}@example.com`); // Email unik
    cy.get('#password').type('Test@1234'); // Isi password
    cy.get('#password-confirmation').type('Test@1234'); // Konfirmasi password
    
    // Klik tombol 'Create an Account'
    cy.get('button[title="Create an Account"]').click();
    
    // Verifikasi keberhasilan pendaftaran
    cy.contains('Thank you for registering with Main Website Store').should('be.visible');
  });
});
