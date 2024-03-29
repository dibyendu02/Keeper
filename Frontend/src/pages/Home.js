import React from "react";
import Layout from "../components/Layout";
import homeImage from "../phonebook.png";

const Home = () => {
  return (
    <Layout>
      <div className=" text-white flex flex-col gap-5 items-center w-96">
        <img src={homeImage} width={300} alt="home image"/>
        <div className="flex flex-col items-center text-xl">
          <h1>Worrying about </h1>
          <h1>missing out your contacts?</h1>
          <h1>We got you</h1>
        </div>
        <h1 className="text-4xl font-bold">Keeper</h1>
        <div className="flex flex-col items-center text-xl">
          <h1>Your digital Phonebook</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
