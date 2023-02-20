describe('Stream Deck', () => {
	it('Should drag action to canvas', () => {
		cy.visit('http://localhost:1420/');

		const dataTransfer = new DataTransfer();

		cy.get('li').first().trigger('dragstart', {
			dataTransfer,
		});

		cy.get('[dropzone]')
			.first()
			.trigger('drop', {
				dataTransfer,
			})
			.should('contain.text', 'Dog');
	});

	it('Should filter actions', () => {
		cy.visit('http://localhost:1420/');

		cy.get('input').type('liz');

		cy.get('li').should('have.length', 1);
	});
});
