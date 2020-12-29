
// Importing the Required Modules 
const fs = require('fs'); 


if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
var filename = process.argv[2];

// ------- read lines into array --------
function getReadLinesIntoArray() {
    const data = fs.readFileSync(filename, 'UTF-8');
    const lines = data.split(/\r?\n/);
    
    var teamAndNumberOfGoals = []
    
    lines.forEach((line) => {
        if (line.length > 0)
            teamAndNumberOfGoals.push(line.split(',').map(item => item.trim()));
    });
    
    return teamAndNumberOfGoals;
}

// ------- get team names -------
function getTeamNamesAndPoints() {
    var teamNames = []
    var teamNamesAndPoints = []
    var teamAndNumberOfGoals = getReadLinesIntoArray();
    for (var i = 0; i < teamAndNumberOfGoals.length; i ++) {
        var team1 = teamAndNumberOfGoals[i][0].split(" ");
        var team2 = teamAndNumberOfGoals[i][1].split(" ");
        var team1Name = "";
        var team1Score = parseInt(team1[team1.length - 1]);
        for (var j = 0; j < team1.length - 1; j++) {
            if (j == 0) {
                team1Name = team1Name + team1[j];
            } else {
                team1Name = team1Name + " " + team1[j];
            }    
        }
        if(teamNames.indexOf(team1Name) === -1) {
            teamNames.push(team1Name);
            teamNamesAndPoints.push([team1Name, 0]);
        }
    
        var team2Name = "";
        var team2Score = parseInt(team2[team2.length - 1]);
    
        for (var j = 0; j < team2.length - 1; j++) {
            if (j == 0) {
                team2Name = team2Name + team2[j];
            } else {
                team2Name = team2Name + " " + team2[j];
            }
        }
        if (teamNames.indexOf(team2Name) === -1) {
            teamNames.push(team2Name);
            teamNamesAndPoints.push([team2Name, 0]);
        }
    
    // ------- get team points -------
        if (team1Score == team2Score) {
            teamNamesAndPoints[teamNames.indexOf(team1Name)][1] += 1;
            teamNamesAndPoints[teamNames.indexOf(team2Name)][1] += 1;
        } else if (team1Score > team2Score) {
            teamNamesAndPoints[teamNames.indexOf(team1Name)][1] += 3;
        } else if (team2Score > team1Score) {
            teamNamesAndPoints[teamNames.indexOf(team2Name)][1] += 3;
        }
    }

    teamNamesAndPoints = sortTeamsAndPointsArray(teamNamesAndPoints);
    return teamNamesAndPoints;
}


// ------- sort the team and points array ------- 
function sortTeamsAndPointsArray(teamNamesAndPoints) {
    teamNamesAndPoints.sort(sortFunction);
    return teamNamesAndPoints;
}

function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (b[1] < a[1]) ? -1 : 1;
    }
}

// ------- compute the rankings ---------
function computeTeamRankings() {
    teamNamesAndPoints = getTeamNamesAndPoints();
    var ranking = 1;
    var rankingArray = [];
    var tieCounter = 0;
    for (var i = 1; i < teamNamesAndPoints.length; i ++) {
        if (teamNamesAndPoints[i - 1][1] == teamNamesAndPoints[i][1]) {
            tieCounter ++;
            rankingArray.push(ranking);
        } else if (teamNamesAndPoints[i - 1][1] > teamNamesAndPoints[i][1]) {
            tieCounter = 0;
            rankingArray.push(ranking);
            ranking = ranking + tieCounter;
            ranking ++;
        } 
        if (i == (teamNamesAndPoints.length - 1)) {
            rankingArray.push(ranking);
        }
    }
    return rankingArray;
}

// format the output
function formatTheRankings() {
    rankingArray = computeTeamRankings();
    for (var i = 0; i < rankingArray.length; i ++) {
        console.log(rankingArray[i] + ". " + teamNamesAndPoints[i][0] + ", " + teamNamesAndPoints[i][1]);
    }
}

formatTheRankings();

exports.getReadLinesIntoArray = getReadLinesIntoArray;
exports.getTeamNamesAndPoints = getTeamNamesAndPoints;
exports.sortTeamsAndPointsArray = sortTeamsAndPointsArray;
exports.computeTeamRankings = computeTeamRankings;
exports.formatTheRankings = formatTheRankings;
