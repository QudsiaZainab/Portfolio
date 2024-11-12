import { render, screen } from '@testing-library/react';
import Education from '../Components/Education/Education'; 

describe('Education Component', () => {
  it('renders the Education section correctly', () => {

    // Check if the Education heading is displayed
    expect(screen.getByText(/My Education/i)).toBeInTheDocument();

    // Check if the BS Software Engineering text is displayed
    expect(screen.getByText(/BS Software Engineering/i)).toBeInTheDocument();

    // Check if the university name is displayed
    expect(screen.getByText(/Air University, Islamabad/i)).toBeInTheDocument();

    // Check if the date is displayed
    expect(screen.getByText(/2020 - 2024/i)).toBeInTheDocument();

    // Check if the logo image is rendered
    const imgElement = screen.getByAltText('logo');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'images/images__7_-removebg-preview.png');
  });
});
