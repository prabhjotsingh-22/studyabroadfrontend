# Study MBBS Abroad Landing Page

This project is a responsive landing page designed for promoting studying MBBS abroad. It features key information about the program, benefits, country listings, the admission process, and a lead generation form to capture user information.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Form Validation](#form-validation)

## Features
- **Hero Section**: An engaging banner with a call-to-action (CTA) button ("Apply Now for MBBS Abroad").
- **Why Study MBBS Abroad**: Highlights the key benefits of pursuing an MBBS degree in foreign countries.
- **Top Countries**: Includes details on countries like Russia, Uzbekistan, Kazakhstan, Philippines, Georgia, Kyrgyzstan, and Egypt where MBBS programs are offered.
- **Admission Process & Eligibility**: Lists the steps for applying to MBBS programs abroad.
- **Lead Generation Form**: Collects user details such as name, email, phone, and country preference to generate leads.

## Tech Stack
- **HTML**: Markup for the webpage structure.
- **CSS (Tailwind)**: Styling for the webpage layout and design.
- **JavaScript**: Used for form validation and interactivity.
- **React.js**: Frontend framework for building the responsive UI.

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository

git clone https://github.com/prabhjotsingh-22/studyabroadfrontend.git

### 2. Navigate to the project directory

cd studyabroadfrontend

### 3. Install dependencies
Run the following command to install the required dependencies:
npm install

### 4. Start the development server
Once the dependencies are installed, start the React development server:
npm start
Your application should now be running at http://localhost:3000/.

## Usage
After starting the server, access the landing page at `http://localhost:3000/`. The page includes:
- **Hero Section**: A call-to-action banner with an "Apply Now" button.
- **Why Study MBBS Abroad**: Benefits of studying MBBS abroad.
- **Top Countries**: Showcases countries for MBBS programs.
- **Admission Process & Eligibility**: Lists the steps for applying.
- **Lead Generation Form**: Collects name, email, phone, and country preference.

## Form Validation
The lead form includes client-side validation with the following rules:
- **Name**: Required.
- **Email**: Required, must be in a valid email format.
- **Phone**: Required, must be numeric.
- **Country Preference**: Required.
The form displays error messages for invalid inputs and prevents submission until all fields are valid.
