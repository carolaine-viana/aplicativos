import { renderHook, act } from '@testing-library/react-hooks';
import fetchMock from 'jest-fetch-mock';
import { mocked } from 'ts-jest/utils';
import { AuthProvider, useAuth } from './auth';
import { startAsync } from 'expo-auth-session';

fetchMock.enableMocks();

jest.mock('expo-auth-session');

describe('Auth Hook', () => {
	it('should be able to sign in with Google account existing', async () => {
		const googleMocked = mocked(startAsync as any);
		googleMocked.mockReturnValueOnce({
			type: 'success',
			user: {
				id: 'any_id',
				email: 'john.doe@email.com',
				name: 'John Doe',
				photo: 'any_photo.png'
			}
		});

		const { result } = renderHook(() => useAuth(), {
			wrapper: AuthProvider
		});

		await act(() => result.current.signInWithGoogle());

		expect(result.current.user.email).toBe('john.doe@email.com');
	});

	it('should not connect if cancel authentication with google', async () => {
		const googleMocked = mocked(startAsync as any);
		googleMocked.mockReturnValueOnce({
			type: 'cancel'
		});

		const { result } = renderHook(() => useAuth(), {
			wrapper: AuthProvider
		});
		await act(() => result.current.signInWithGoogle());
		expect(result.current.user.email).not.toHaveProperty('id');
	});
});
