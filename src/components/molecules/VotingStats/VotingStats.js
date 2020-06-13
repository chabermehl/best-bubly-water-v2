import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {Table} from 'semantic-ui-react';

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

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Votes</Table.Cell>
          <Table.Cell>{votes}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default VotingStats;
