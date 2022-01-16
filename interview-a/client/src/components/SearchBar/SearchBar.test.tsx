import { render, screen } from '@testing-library/react';
import SearchBar from './';

const props = {
  placeholder: 'Search',
  value: '',
  count: 0,
  onChangeQuery: jest.fn(),
  onSearchBySurvey: jest.fn(),
}

describe('Copyright', () => {
  const renderSearchBar = () => render(<SearchBar {...props} />);

  test('should render content...', () => {
    renderSearchBar();
    const searchbarContainer = screen.getByTestId('searchbar-container');
    const donthavecoins = screen.getByText(/0 results/i);
    expect(searchbarContainer).toBeInTheDocument();
    expect(donthavecoins).toBeInTheDocument();
  });
});