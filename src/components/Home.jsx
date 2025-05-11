import React from "react";

const Home = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
      src="/Ace-Developer/images/Home.webp"
      alt="Ace Developer Background"
      loading="eager"
      className="absolute inset-0 w-full h-full object-cover z-0"
      width="1920"
      height="1080"
    />


      {/* Overlay Text */}
      <div className="relative z-10 w-full h-full flex items-center justify-center text-center bg-black/50">
        <h2 className="text-white text-3xl font-serif">
          Welcome to Ace Developer
        </h2>
      </div>
    </section>
  );
};

export default Home;
