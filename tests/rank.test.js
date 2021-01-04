'use strict';
var argCache = process.argv;
process.argv = ['node', 'index', 'lib/sample.txt'];
const rankings = require('../index');
const fs = require('fs'); 
var teamAndNumberOfGoals = [["Lions 3", "Snakes 3"], ["Tarantulas 1", "FC Awesome 0"], ["Lions 1", "FC Awesome 1"], ["Tarantulas 3", "Snakes 1"], ["Lions 4", "Grouches 0"]];
var teamNamesAndPoints = [["Lions", 5], ["Snakes", 1], ["Tarantulas", 6], ["FC Awesome", 1], ["Grouches", 0]];
var sortedTeamNamesAndPoints = [["Tarantulas", 6], ["Lions", 5], ["Snakes", 1], ["FC Awesome", 1], ["Grouches", 0]];
var leagueRankings = [1, 2, 3, 3, 5];
var sampleOutput = fs.readFileSync('lib/sampleOutput.txt', 'UTF-8');
var sampleOutput2 = fs.readFileSync('lib/sampleOutput2.txt', 'UTF-8');

describe('file input for index.js', () => {
    it('read file lines into an array', () => {
        expect(rankings.getReadLinesIntoArray(process.argv[2])).toEqual(teamAndNumberOfGoals);
    });

    it('get team names and points', () => {
        expect(rankings.getTeamNamesAndPoints()).toEqual(teamNamesAndPoints);
    });

    it('sort the team and points array', () => {
        expect(rankings.getSortedTeamsAndPointsArray()).toEqual(sortedTeamNamesAndPoints);
    });

    it('compute the rankings', () => {
        expect(rankings.computeTeamRankings()).toEqual(leagueRankings);
    });

    it('display ranking table', () => {
        expect(rankings.displayRankingTable()).toEqual(sampleOutput);
    });

    it('teams with multiple-word names', () => {
        process.argv = ['node', 'index', 'lib/sample2.txt'];

        expect(rankings.displayRankingTable()).toEqual(sampleOutput2);
    });
});
