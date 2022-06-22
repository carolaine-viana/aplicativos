import React from 'react';
import { render } from '@shared/utils/test-utils';
import RoleWrapper from '../RoleWrapper';
import UserRoleContext from 'shared/contexts/UserRoleContext';

describe('Tests RoleWrapper', () => {
  it('should call render RCA content', async () => {
    const roleInfoMock = {
      role: 'RCA',
      isRCA: true,
      isGT: false,
    };
    const renderRCAContentMock = jest.fn();
    const renderGTContentMock = jest.fn();

    render(
      <UserRoleContext.Provider value={{ roleInfo: roleInfoMock }}>
        <RoleWrapper
          renderRCAContent={renderRCAContentMock}
          renderGTContent={renderGTContentMock}
        />
      </UserRoleContext.Provider>
    );
    expect(renderRCAContentMock).toHaveBeenCalled();
    expect(renderGTContentMock).not.toHaveBeenCalled();
  });

  it('should call render GT content', async () => {
    const roleInfoMock = {
      role: 'GT',
      isRCA: false,
      isGT: true,
    };
    const renderGTContentMock = jest.fn();
    const renderRCAContentMock = jest.fn();

    render(
      <UserRoleContext.Provider value={{ roleInfo: roleInfoMock }}>
        <RoleWrapper
          renderGTContent={renderGTContentMock}
          renderRCAContent={renderRCAContentMock}
        />
      </UserRoleContext.Provider>
    );

    expect(renderGTContentMock).toHaveBeenCalled();
    expect(renderRCAContentMock).not.toHaveBeenCalled();
  });

  it('should render null', () => {
    const { toJSON } = render(<RoleWrapper />);
    expect(toJSON()).toBeNull();
  });
});
