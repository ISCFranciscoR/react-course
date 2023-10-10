import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Router from './Router';
import { getCurrentPath } from '../../helpers/getCurrentPath';
import Route from './Route';
import Link from '../Link';

vi.mock('../../helpers/getCurrentPath', () => ({
  getCurrentPath: vi.fn(),
}));

describe('Router', () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should work', () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    expect(screen.getByText('404')).toBeTruthy();
  });

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about');
    const routes = [
      { path: '/', component: () => <h1>Home</h1> },
      { path: '/about', component: () => <h1>About</h1> },
    ];

    render(<Router routes={routes} />);
    expect(screen.getByText('About')).toBeTruthy();
  });

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/');

    render(
      <Router>
        <Route
          path="/"
          component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to="/about">Go to About</Link>
              </>
            );
          }}
        />
        <Route path="/about" component={() => <h1>About</h1>} />
      </Router>
    );

    screen.getByText(/Go to About/).click();

    const aboutTitle = await screen.findByText('About');

    expect(aboutTitle).toBeTruthy();
  });
});
