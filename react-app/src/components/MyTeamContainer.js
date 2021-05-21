import { Card } from 'semantic-ui-react';
import PlayerCard from './PlayerCard';

const MyTeamContainer = props => {
	return (
		<div>
			<h1>My Players</h1>
			<Card.Group>
				{props.players.map(player => {
					return <PlayerCard key={player.id} player={player} movePlayer={props.movePlayer} />;
				})}
			</Card.Group>
		</div>
	);
};

export default MyTeamContainer;
