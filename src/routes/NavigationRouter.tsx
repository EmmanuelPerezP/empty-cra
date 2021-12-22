import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
// import { STORE_ONBOARDING } from '@constants/Routes';

/**
 * __Component__
 * @param {id} id - id of the component.
 * @returns {ReactElement} - The Component component
 * @example
 * <Button
 *  id="button-id"
 *  idIntl="Start"
 *  onClick={() => {}}
 *  />
 *  */
const Component = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Component;
