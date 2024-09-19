import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Button', () => {
    test('Test render', () => {
        render(<Input value="test" />);
        expect(screen.getByDisplayValue('test')).toBeInTheDocument();
    });
});
