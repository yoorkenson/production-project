import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('ts', 'tsx');
    config.module.rules.push(buildCssLoader(true));

    config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
    }));

    config.resolve.modules = [
        path.resolve(__dirname, '../../src'),
        'node_modules',
    ];

    return config;
};
