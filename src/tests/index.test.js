import { cleanup, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import HomePage from '@/pages/index.tsx';

afterEach(cleanup);

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// jest.mock('next/head', () => {
//   return {
//     __esModule: true,
//     default: ({ children }) => {
//       return <>{children}</>;
//     },
//   };
// });

beforeEach(() => {
  const push = jest.fn();
  useRouter.mockImplementation(() => ({ push }));
});

describe('Home Page', () => {
  it('renders the home page', () => {
    render(<HomePage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  // it('has correct meta tags', () => {
  //   render(<HomePage />, { container: document.head });
  //   expect(document.title).toBeInTheDocument();
  // });
});
