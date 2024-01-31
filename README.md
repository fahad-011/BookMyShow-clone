# BookMyShow Clone

![](demo.gif)

Welcome to the BookMyShow Clone project! This React-based application aims to replicate the user interface and functionality of the popular ticket booking platform, BookMyShow. Whether you're a developer looking to explore React or someone interested in creating a custom ticket booking app, this project provides a comprehensive foundation.

## Description

BookMyShow is a popular platform that allows users to browse and book tickets for movies, events, and various entertainment shows. This clone project recreates the key features of the BookMyShow platform, providing a seamless and interactive user experience.

## Key Features

### Home Page

- Dynamic landing page showcasing upcoming movies, events, and trending shows.
- Featured banners highlighting special promotions and offers.

### Movie Page

- Detailed information about a selected movie, including showtimes, cast, and reviews.
- Option to select seats and book tickets for a specific show.

### Event Page

- Information about upcoming events, concerts, and performances.
- Easy booking process for tickets to events.

### Order Page

- Seamless order process, allowing users to add tickets to their cart and complete the booking.

## Get the App

Download the BookMyShow Clone app now and enjoy a seamless ticket booking experience! 🎫🍿

## Libraries Used:

| Library Name       | Description                              |
| ------------------ | ---------------------------------------- |
| React Js           | Frontend Framework                       |
| React Router       | Routing library                          |
| React Slick        | For carousel implementation              |
| slick-carousel     | Carousel library (used with React Slick) |
| Axios              | HTTP client for making API requests      |
| headlessui/react   | Accessible React components              |
| react-oauth/google | Google OAuth library for authentication  |
| React Icons        | Icon library for React                   |
| React Helmet       | Manage document head for SEO             |
| Tailwind CSS       | Utility-first CSS framework              |

## Tools Used:

| Tool Name | Description          |
| --------- | -------------------- |
| npm       | Package Manager tool |

## Installation and Usage Guide

### Fork the Repository

Click the "Fork" button at the top right corner of the page. This will create a copy of the repository under your GitHub account.

### Installation

To run the Project locally, follow these steps:

1. Clone the Repository

   ```bash
   git clone https://github.com/your-username/BookMyShow-clone.git
   ```

2. Navigate to the project directory

   ```bash
   cd BookMyShow-clone
   ```

3. Install the dependencies using npm

   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root directory and add the following configurations:

```env
REACT_APP_API_KEY = 'YOUR_MOVIEDB_API_KEY'
REACT_APP_GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'
REACT_APP_RAZORPAY_KEY = 'YOUR_RAZORPAY_API_KEY'
REACT_APP_OPENCAGE_API_KEY = 'YOUR_OPENCAGE_API_KEY'
```

Replace the placeholder values `<YOUR_MOVIEDB_API_KEY>`, `<YOUR_GOOGLE_CLIENT_ID>`, `<YOUR_RAZORPAY_API_KEY>`, and `<YOUR_OPENCAGE_API_KEY>` with your actual API keys. You can obtain these keys from the following resources:

- MovieDB API Key: [The MovieDB API](https://www.themoviedb.org/documentation/api)
- Google Cloud API Key: [Google Cloud Console](https://console.cloud.google.com/)
- Razorpay API Key: [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys)
- OpenCage API Key: [OpenCage Data](https://opencagedata.com/api)


## Usage

To start the development server and view the application, run the following command:

```bash
npm start
```

This will start the application on your computer's local development server, accessible at `http://localhost:3000`

## ScreenShots

# Home Page:

![App Screenshot](/src/Screenshots/Home.png)

# Movie Page:

![App Screenshot](/src/Screenshots/Movie.png)

# Sign In Page:

![App Screenshot](/src/Screenshots/SignIn.png)

# Payment Page

![App Screenshot](/src/Screenshots/Payment.png)
