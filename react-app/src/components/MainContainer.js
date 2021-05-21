import React from 'react'
import MyTeamContainer from './MyTeamContainer'
import PlayersContainer from './PlayersContainer'

export default class MainContainer extends React.Component {

    state ={
        players: [],
        myPlayers: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/players')
        .then(res => res.json())
        .then(players => this.setState({players}))
    }

    moveToMyTeam = (player) => {

        this.setState({
            myPlayers: [...this.state.myPlayers, player],
        })
    }

    yourCut = (clickedPlayer) => {
        let myPlayers = this.state.myPlayers.filter(myPlayer => myPlayer.id !== clickedPlayer.id) //keep myPlayer if its id is not equal to the passed in player's id

        this.setState({
            myPlayers: myPlayers,
        })
    }

    filteredPlayers = () => {
        let players = this.state.players.filter(player => !this.state.myPlayers.includes(player))

        return players
    }


    render(){
        return(
            <div>
                <MyTeamContainer players={this.state.myPlayers}  movePlayer={this.yourCut} />
                <hr></hr>
                <PlayersContainer players={this.filteredPlayers()} movePlayer={this.moveToMyTeam} />
            </div>
        )
    }

}