import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { map } from "lodash";

const GET_FLAVORS = gql`
  query flavors {
    flavors {
      flavor
      id
      pk
      votes
    }
  }
`;

const TestQuery = () => {
  const { loading, error, data } = useQuery(GET_FLAVORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return map(data.flavors, (flavor) => (
    <div key={flavor.id}>
      <span>ID: {flavor.id}</span>
      <span>PK: {flavor.pk}</span>
      <span>Flavor: {flavor.flavor}</span>
      <span>Votes: {flavor.votes}</span>
    </div>
  ));
};

export default TestQuery;
