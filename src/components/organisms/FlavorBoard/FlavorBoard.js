import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {map} from 'lodash';

import BublyFlavor from '../../atoms/BublyFlavor/BublyFlavor';

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

const FlavorBoard = () => {
  const {loading, error, data} = useQuery(GET_FLAVORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return map(data.flavors, (flavor) => <BublyFlavor flavor={flavor} />);
};

export default FlavorBoard;
