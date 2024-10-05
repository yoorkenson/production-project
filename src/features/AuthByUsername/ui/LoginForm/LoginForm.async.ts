import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore *fix-bug*
    setTimeout(() => resolve(import('./LoginForm')), 1000);
}));

// export const LoginFormAsync= lazy<FC<LoginFormProps>>(() => import('./LoginForm'));
