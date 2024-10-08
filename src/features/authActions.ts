import axios from 'axios';
import { AppDispatch } from '../store';
import { loginSuccess } from './authSlice';

export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post('https://regaloo-updated-code.onrender.com/customeraccnt/login', {
      username,
      password,
    });
    // Destructure token and user from the response
    const { auth_token: { auth_token, customer_id, name, custaccount_id
    }} = response.data;
 // Destructure token and user from the response

    // Assuming the response is successful and contains the token and user data
    dispatch(loginSuccess({ token: auth_token, user: { id: customer_id, name: name,  acct_id: custaccount_id } }));

    // Save the token and user data in localStorage for persistence
    localStorage.setItem('authToken', auth_token);
    // localStorage.setItem('authUser', JSON.stringify(user));

  } catch (error: any) {
    console.error('An error occurred during login:', error);
    // Check if the error contains a response from the server
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'Login failed');
    } else {
      throw new Error('An error occurred during login.');
    }
  }
};

