# league-ranker
Command line program that accepts a text file with football scores and computes the league position for each team.

Author: 
Glenn Madzonga - glenn.madzonga@gmail.com

Tech Stack: 
Written in Javascript and runs in the Node environment.

Setup:
1. On the commandline, clone the repo via the link: https://github.com/madzonga/league-ranker.git
2. cd league-ranker
3. npm install #to install the dependencies for automated testing
4. node index lib/sample.txt #to run the application with the sample input supplied
5. npm test # to run the automated tests using jest

###Soccer League Rankings Table ####Sam Hamm • samhamm@gmail.com

--

####This application is written in JavaScript and runs in the Node.js environment

####Setup Instructions

On the command line, enter git clone https://github.com/substantial-candidates/samhamm.git to create a local copy of the application and its supporting files.
On the command line, enter cd samhamm to open the application directory.
On the command line, enter npm install to install the dependencies for automated testing. The application will operate without these dependencies, but the tests will not.
On the command line, enter npm install -g grunt-cli to perform the specialized installation required by this dependency.
To see the output of the sample input that was provided with the challenge, enter node rank lib/sample-input.txt on the command line
To see another sample of output, enter node rank league on the command line. This reads from the league.txt file at the root level of the directory.
To run the automated tests, enter grunt test on the command line. These tests use the provided sample input as the primary testing source, as well as additional input files (located in the lib directory) that were created to demonstrate various functionalities of the application.
####Usage Instructions

There are two ways the user can enter league score data to be ranked:

The user can specify an existing text file of scores in the command line by entering node rank path/to/scores-file.txt.
The user can replace the data in the league.txt file with the desired data, and then enter node rank league at the command line.
--

####EXAMPLE

This input:

Lions 3, Snakes 3 Tarantulas 1, FC Awesome 0 Lions 1, FC Awesome 1 Tarantulas 3, Snakes 1 Lions 4, Grouches 0

will produce this output:

1. Tarantulas, 6 pts 2. Lions, 5 pts 3. FC Awesome, 1 pt 3. Snakes, 1 pt 5. Grouches, 0 pts