import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="max-w-[85%] mx-auto py-12 text-gray-800 leading-relaxed">
      <Helmet>
        <title>Home | Yustola Global</title>
        <meta name="description" content="Welcome to Yustola Global - Your trusted travel and tour partner." />
      </Helmet>
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 text-center mb-6 md:mb-8">
        Welcome to Yustola Global
      </h1>

      {/* Paragraph */}
      <p className="text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda illo deleniti distinctio asperiores dignissimos quia ipsa. Minima veniam iure veritatis amet sit reprehenderit saepe quis dicta velit, rerum nulla totam soluta inventore dolor repellat quaerat ratione! Tempora, ut enim minima voluptate excepturi, quia libero aspernatur modi sed natus quibusdam maxime! Cum doloremque fuga ipsum commodi ipsam, voluptatem deserunt.
      </p>
      
      <p className="text-base md:text-lg lg:text-xl mt-4 md:mt-6">
        Blanditiis illum illo aperiam tempore, quibusdam provident quisquam. Accusantium, voluptates itaque. Qui temporibus quibusdam inventore tenetur eos minima, voluptate, voluptas repudiandae magnam nisi eaque provident, quo voluptatem facere? Pariatur enim consequuntur expedita eligendi alias laboriosam natus deserunt dolorem, necessitatibus doloribus temporibus quo sequi.
      </p>

      <p className="text-base md:text-lg lg:text-xl mt-4 md:mt-6">
        Quod, earum, quam ipsum ullam ea itaque suscipit numquam iusto eveniet cumque, dolor neque cum assumenda praesentium illum accusamus dolore! Perferendis architecto voluptate ipsa repudiandae esse cum itaque beatae soluta quasi! Corporis fugit similique quisquam doloremque eum necessitatibus cumque explicabo rerum velit sit eveniet magnam sint, quam ratione libero mollitia odit nobis iure.
      </p>
    </div>
  );
};

export default Home;
