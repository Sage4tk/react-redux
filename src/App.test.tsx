import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';


//import combined reducers
import allReducers from './reducers';
import userEvent from '@testing-library/user-event';

//initiate store
const myStore = createStore(allReducers);

//test counter increment redux if increases by 1
test('Check if increment action icnreases the counter', async () => {
  render(
    <Provider store={myStore}>
      <App />
    </Provider>
  );
  
  //find button and fire
  const button = screen.getByTestId("btn1");
  userEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText("Counter 1")).toBeInTheDocument();
  })
});

//test counter decreases redux if decreases by 1
test('Check if decreases action decreases the counter', async () => {
  render(
    <Provider store={myStore}>
      <App />
    </Provider>
  );
  
  //find button and fire
  const button = screen.getByTestId("btn2");
  userEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText("Counter 0")).toBeInTheDocument();
  })
});

//test if log in button works
test('Render logged element if clicked on login button', async () => {
  render(
    <Provider store={myStore}>
      <App />
    </Provider>
  );
  
  //find button and fire
  const button = screen.getByTestId("log-btn");
  userEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText("Is logged in.")).toBeInTheDocument();
  })

})