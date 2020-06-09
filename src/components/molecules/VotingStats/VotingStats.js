import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_VOTE_STATS = gql`
  query vote_average {
    flavors_aggregate {
      aggregate {
        avg {
          votes
        }
      }
    }
  }
`;

const VotingStats = () => {
  const {loading, error, data} = useQuery(GET_VOTE_STATS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const {votes} = data.flavors_aggregate.aggregate.avg;

  return <div>Average: {votes}</div>;
};

export default VotingStats;
