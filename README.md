# React.js-Weather-App

This is a weather app created with React.js using Vite and styled using Tailwind CSS.
You can search for locations or simply use auto detect to locate your place weather.

## Table of Contents

- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Demo

Check out the live demo of the application: [Demo Link](https://react-js-weather-app-roan.vercel.app/)


## Technologies Used

- [Vite](https://vitejs.dev/): A fast build tool that provides near-instant hot module replacement (HMR).
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.

## Installation

Follow these steps to get your project up and running:

1. **Clone the repository:**
```bach
git clone https://github.com/imadfen/React.js-Weather-App.git
```
   
2. **Navigate to the project directory:**
```bach
cd React.js-Weather-App
```

3. **Create a .env file in the root of your project and set it as follow:**

```env
VITE_METEO_API_KEY=your_api_key_from_https://www.weatherapi.com/
VITE_METEO_API_URL='https://api.weatherapi.com/v1/forecast.json?days=7&aqi=no&alerts=no'
```

4. **Install dependencies:**
```bach
npm install
# or
yarn install
```

## Usage

To use the application, follow these steps:

1. **Run the development server:**
```bach
npm run dev
# or
yarn dev
```

2. **Open your browser:**

Visit http://localhost:3000 to see your application in action.
