import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        text: 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
            + 'import { Code } from \'./Code\';\n'
            + '\n'
            + 'const meta = {\n'
            + '    title: \'_CHOOSE_/Code\',\n'
            + '    component: Code,\n'
            + '    parameters: {\n'
            + '        layout: \'fullscreen\',\n'
            + '    },\n'
            + '    tags: [\'autodocs\'],\n'
            + '    argTypes: {},\n'
            + '    args: {},\n'
            + '} satisfies Meta<typeof Code>;',
    },
};
