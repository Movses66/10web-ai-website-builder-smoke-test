describe('10Web AI Website Builder - Smoke Flow', () => {
  const builderUrl = 'https://10web.io/ai-website-builder/';

  it('Completes the happy path and validates website preview', () => {
    // Step 1: Open AI Website Builder landing page
    cy.visit(builderUrl);

    // Step 2: Enter site description and start website generation
    cy.get('#description').type('Photography portfolio for a travel photographer.');
    cy.get('.only_generate_text').click();

    // Step 3: Interact with the user dashboard hosted on my.10web.io (cross-origin)
    cy.origin('https://my.10web.io', () => {
      // Wait for a loading animation to fully appear (opacity=1)
      cy.get('div.with-animation.ng-star-inserted.visible', { timeout: 60000 }).should('have.css', 'opacity', '1');

      // Click the "Next" button to proceed in the generation flow
      cy.get('.ds-btn-black').click();

      // Choose a website theme called "Obsidian"
      cy.get('.Obsidian').click();

      // Click the "Generate" button to start generating the website with chosen options
      cy.get('.db-actions-line > .ds-btn-purple-blue').click();

      // Click "Sign up with Email" option in the signup prompt
      cy.get('.signup-short-flow__container').contains('Sign up with Email').click();

      // Fill out the signup form with unique email and basic user info
      const email = `qatest+${Date.now()}@example.com`; // Generates unique email to avoid conflicts
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="fname"]').type('M');
      cy.get('input[name="lname"]').type('M');
      cy.get('input[name="password"]').type('Pass123!@');

      // Submit the signup form, forcing the click in case of overlays
      cy.get('button.ds-btn-purple-blue').click({ force: true });

      // Wait until the website generation steps UI is visible (indicating generation in progress or done)
      cy.get('div.db-create-ai-assistant-finalize__steps', { timeout: 180000 }).should('be.visible');

      // Wait for the popup notification to appear that offers the preview
      cy.get('.db-notification-dialog', { timeout: 180000 }).should('be.visible');

      // Click on the "Preview your website" button to open the generated site preview
      cy.get('.center > .ds-btn-black').click();

      // Verify the preview header element is visible (checks site loaded correctly)
      cy.get('.db-demo-preview-header', { timeout: 60000 }).should('be.visible');

      // Verify the preview body container is visible (additional check for content presence)
      cy.get('.db-demo-preview-body-wrap', { timeout: 60000 }).should('be.visible');
    });
  });
});
