import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const PlayerCard = ({ player, movePlayer }) => {

    const handlePlayerClick = () => {
        movePlayer(player)
    }

	return (
		<Card onClick={handlePlayerClick}>
			<Image src={player.image} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{player.name}</Card.Header>
				<Card.Meta>
					<span>{player.position}</span>
				</Card.Meta>
				<Card.Description>
					{player.team}
				</Card.Description>
			</Card.Content>
		</Card>
	);
};

export default PlayerCard;
