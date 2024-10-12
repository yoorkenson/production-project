import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data: Profile = {
    username: 'admin',
    age: 20,
    country: Country.Ukraine,
    lastname: 'фамилия',
    first: 'имя',
    city: 'город',
    currency: Currency.EUR,
};

const voidFn = () => {};

describe('profileSlice.test', () => {
    test('test setUsername', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123123' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '123123',
            }),
        )).toEqual({ form: { username: '123123' } });
    });

    test('test updateProfile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test updateProfile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });

    test('test updateProfile service rejected', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.rejected(new Error(), '', voidFn(), [ValidateProfileError.SERVER_ERROR]),
        )).toEqual({
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        });
    });
});
