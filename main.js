function alpineInstance() {
    return {
        user: 'oddgoo',
        apiKey: 'sByjqJwYXk0LDgiECPEOWmN14fvMG3r0',
        title: 'RetroAchievements Showcase',
        intro: 'Description will go here',
        games: [],
        systems: {},

        init() {
            console.log('fetching mastered games')
            //fetch('https://jsonplaceholder.typicode.com/users')
            fetch(`https://retroachievements.org/API/API_GetUserCompletedGames.php?u=${this.user}&z=${this.user}&y=${this.apiKey}`)
                .then(response => response.json())
                .then(data => {
                    filteredGames = data.filter(game => game.HardcoreMode == 1 && game.PctWon >= 1 )

                    console.log(filteredGames)
                    for (let game of filteredGames) {

                        if( !this.systems[game.ConsoleName])
                            this.systems[game.ConsoleName] = {'name' : game.ConsoleName, 'games' : []}
                        this.systems[game.ConsoleName].games.push(game)
                    }

                    console.log(this.systems)
                    //this.games = filteredGames
                    //console.log(filteredGames)

                    // fetch(`https://retroachievements.org/API/API_GetGame.php?u=${this.user}&z=${this.user}&y=${this.apiKey}&i=${filteredGames[0].GameID}&mode=json`)
                    //     .then(response => response.json())
                    //     .then(data => {console.log(data)})

                    // filteredGames.forEach(game => {
                    //     console.log(game)
                    //     fetch(`https://retroachievements.org/API/API_GetGame.php?u=${this.user}&z=${this.user}&y=${this.apiKey}&i=${game.GameID}`)
                    //         .then(response => response.json())
                    //         .then(data => {console.log(data)})
                    // });
                })
        },
    }
}

function fetchUserGames() {


}