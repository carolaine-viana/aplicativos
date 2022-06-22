import React from 'react';
import expect from 'expect';
import '@shared/utils/mock-react-native-third-lib';
import { render, waitFor } from '@shared/utils/test-utils';
import PrivacyPolicy from '../views/PrivacyPolicy';
import PrivacyPolicyManager from '../services/PrivacyPolicyManager';

jest.mock('../services/PrivacyPolicyManager');

jest.mock('@shared/hooks/useRoleInfo', () => {
  return {
    useRoleInfo: () => {
      return {
        roleInfo: {
          role: 'RCA',
        },
      };
    },
  };
});

jest.mock('../privacyPolicyUtils', () => ({
  policyText: 'Some policy',
}));

describe('Tests PrivacyPolicy', () => {
  let PrivacyPolicyManagerInstance;
  beforeAll(() => {
    PrivacyPolicyManagerInstance = PrivacyPolicyManager.mock.instances[0];
    PrivacyPolicyManagerInstance.shouldLoadPrivacyPolicy = jest.fn();
  });

  it.skip('should render privacy policy modal ', async () => {
    const screen = render(<PrivacyPolicy fromMenu={false} />);
    PrivacyPolicyManagerInstance.shouldLoadPrivacyPolicy.mockResolvedValueOnce(true);

    await waitFor(() => {
      expect(PrivacyPolicyManagerInstance.shouldLoadPrivacyPolicy).toHaveBeenCalledWith('RCA');
    });

    expect(screen.queryByTestId('privacyPolicyModal').props.visible).toBe(true);
  });
  it('should NOT render privacy policy modal when user has already seen the privacy policy', async () => {
    PrivacyPolicyManagerInstance.shouldLoadPrivacyPolicy.mockResolvedValueOnce(false);
    const screen = render(<PrivacyPolicy fromMenu={false} />);

    await waitFor(() =>
      expect(PrivacyPolicyManagerInstance.shouldLoadPrivacyPolicy).toHaveBeenCalled()
    );
    expect(screen.queryByTestId('privacyPolicyModal').props.visible).toBe(false);
  });
  it('should render accept button when first time policy has been seen', async () => {
    PrivacyPolicyManagerInstance.shouldLoadPrivacyPolicy.mockResolvedValueOnce(true);
    const screen = render(<PrivacyPolicy fromMenu={false} />);

    await waitFor(() =>
      expect(PrivacyPolicyManagerInstance.shouldLoadPrivacyPolicy).toHaveBeenCalled()
    );
    expect(screen.queryByText('Aceitar')).not.toBeNull();
  });

  it('should NOT render accept button when has already seen the privacy policy', async () => {
    PrivacyPolicyManagerInstance.shouldLoadPrivacyPolicy.mockResolvedValueOnce(false);
    const screen = render(<PrivacyPolicy fromMenu={true} />);

    await waitFor(() =>
      expect(PrivacyPolicyManagerInstance.shouldLoadPrivacyPolicy).toHaveBeenCalled()
    );
    expect(screen.queryByText('Aceitar')).toBeNull();
  });
});
