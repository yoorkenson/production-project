import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                // массив атрибутов для выпиливания
                const forbidden = state.opts.props || [];

                // проходим по всем нодам
                path.traverse({
                    JSXIdentifier(current) {
                        // получаем имя ноды
                        const nodeName = current.node.name;

                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
