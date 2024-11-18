// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Yustola Global</title>
        <meta name="description" content="Welcome to Yustola Global - Your trusted travel and tour partner." />
      </Helmet>
      
      {/* Content of Home Page */}
      <h1 className="text-4xl font-bold text-blue-700 text-center mt-10">Welcome to Yustola Global</h1>
      
    </div>
  );
};

export default Home;
