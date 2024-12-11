import { Outlet } from 'react-router-dom';
import { Navbar } from '..';

export const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
