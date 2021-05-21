import { Card } from 'semantic-ui-react'
import PlayerCard from './PlayerCard'

const PlayersContainer = (props) => {
    return (
			<div>
                <h1>Players</h1>
				<Card.Group>
					{props.players.map(player => {
						return (
							<PlayerCard
								key={player.id}
								player={player}
								movePlayer={props.movePlayer}
							/>
						);
					})}
				</Card.Group>
			</div>
		);
}

export default PlayersContainer