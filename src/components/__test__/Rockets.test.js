import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../Rockets';

const mockStore = configureStore([]);
const initialState = {
  rockets: {
    rockets: [
      {
        rocket_id: 'rocket1',
        rocket_name: 'Falcon 1',
        description: 'Description 1',
        flickr_images: 'https://example.com/rocket1.jpg',
        reserved: false,
      },
      {
        rocket_id: 'rocket2',
        rocket_name: 'Falcon 9',
        description: 'Description 2',
        flickr_images: 'https://example.com/rocket2.jpg',
        reserved: true,
      },
    ],
  },
};
const store = mockStore(initialState);

describe('Rockets Component', () => {
  test('renders a list of rockets with reservation functionality', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketNames = screen.getAllByText(/Falcon/i);
    expect(rocketNames).toHaveLength(2);

    const reserveButton = screen.getByText(/Reserve Rocket/i);
    fireEvent.click(reserveButton);
    expect(reserveButton.textContent).toBe('Reserve Rocket');

    const reservationStatus = screen.getByText(/Reserved/i);
    expect(reservationStatus).toBeInTheDocument();

    // snapshot testing
    expect('Rockets component').toMatchSnapshot();
  });
});
