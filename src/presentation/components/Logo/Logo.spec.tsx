import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo Component', () => {

    test('should logo component be created', () => {
        
        const component = render(<Logo />);
        
        expect(component).toBeDefined();

    });

});