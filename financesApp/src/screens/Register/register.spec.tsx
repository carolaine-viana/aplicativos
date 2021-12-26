import React from 'react';
import { render, fireEvent, waitFor} from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';
import { Register } from '.';

jest.mock('@react-navigation/native', () => {
    return {
      useNavigation: jest.fn()
    }
  })

const Providers: React.FC = ({children}) =>(
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);
describe('Register Screen', () =>{
    it('should be open category modal when uer click on button', async() => {
        const {getByTestId} = render(
        <Register/>,
        {
            wrapper: Providers
        }
        );
        const categoryModal = getByTestId('modal-category');
        const buttonCategory = getByTestId('button-category')
        fireEvent.press(buttonCategory)
        
       await waitFor(() => {
            expect(categoryModal.props.visible).toBeTruthy()
        })
        // console.log(buttonCategory)
    })
})