import { render, screen } from '@testing-library/react';
import Experience from '../Components/Experience/Experience';

describe('Experience Component', () => {
  it('renders the Experience section correctly', () => {
    

    // Check if the Experience heading is displayed
    expect(screen.getByText(/My Experience/i)).toBeInTheDocument();

    // Check if the internship position is displayed
    expect(screen.getByText(/Software Engineer Intern/i)).toBeInTheDocument();

    // Check if the company name is displayed
    expect(screen.getByText(/Bloomrix/i)).toBeInTheDocument();

    // Check if the internship date is displayed
    expect(screen.getByText(/August 2024 - November 2024/i)).toBeInTheDocument();

    // Check if the detailed experience description is displayed
    expect(screen.getByText(/As a Software Engineer Frontend Intern at Bloomrix/i)).toBeInTheDocument();
  });
});
