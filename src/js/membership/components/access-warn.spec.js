import React from 'react';
import {render, screen} from '@testing-library/react';

import AccessWarn from './access-warn';


describe('membership component access-warn', () => {
    it('renders self', () => {
        render(<AccessWarn />);

        expect(screen.getByText(/This is a private system/)).toBeVisible();
    });
});
