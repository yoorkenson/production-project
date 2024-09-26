import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
    test('Text render', () => {
        render(<Text text="text" />);
        expect(screen.getByText('text')).toBeInTheDocument();
    });
});

describe('Text', () => {
    test('title render', () => {
        render(<Text title="title" />);
        expect(screen.getByText('title')).toBeInTheDocument();
    });
});
