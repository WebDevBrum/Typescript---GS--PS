"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreBoard = void 0;
const _ = require("lodash");
class ScoreBoard {
    constructor() {
        this.results = [];
    }
    addResult(newResult) {
        this.results.push(newResult);
        let allCapsName = _.upperCase(newResult.playerName);
        console.log(`${allCapsName} : ${newResult.score}`);
    }
    updateScoreBoard() {
        let output = "<h2>Scoreboard</h2>";
        for (let index = 0; index < this.results.length; index++) {
            const result = this.results[index];
            output += "<h4>";
            output +=
                result.playerName +
                    ":" +
                    result.score +
                    "/" +
                    result.problemCount +
                    " for factor " +
                    result.factor +
                    "</h4>";
        }
        const scoresElement = document.getElementById("scores");
        scoresElement.innerHTML = output;
    }
}
exports.ScoreBoard = ScoreBoard;
//# sourceMappingURL=scoreboard.js.map