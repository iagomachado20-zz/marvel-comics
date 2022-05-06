import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {

    test('should App component be created', () => {
        
        const component = render(<App />);
        expect(component).toBeDefined();

    });

});