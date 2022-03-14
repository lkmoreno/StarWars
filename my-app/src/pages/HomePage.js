import React from "react";
import Footer from "../components/Footer";
import ListPerson from "../components/ListPerson";

const HomePage = (props) => {
  const { loading, people } = props;
  return (
    <>
      <ListPerson
        loading={loading}
        people={people}
      />
      <Footer />
    </>
  );
};
export default HomePage;
