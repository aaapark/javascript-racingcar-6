import { MissionUtils } from "@woowacourse/mission-utils";

export default class Score {

    playGame(count,name) {
        // console.log(count)
        // MissionUtils.Console.print(name)
        MissionUtils.Console.print('\n실행결과')
        for(let i = 0 ; i < count ; i ++) {
            this.getScore(name);
        } this.getWinner(name)
    }

    getScore(name) {
        let currentScore =''   
        name.forEach((element) => {
            if(MissionUtils.Random.pickNumberInRange(1, 9) >= 4) {
                element.score += '-'
            }
            currentScore += `${element.name }: ${element.score} \n`;
        })
        MissionUtils.Console.print(currentScore)
    }
    
    getWinner(name) {
        // MissionUtils.Console.print(name)
        let checkScore = []
        name.forEach((element) => {
            checkScore.push({name: element.name, score: element.score.length})
        });


        let max_val = checkScore.map(e => e.score).reduce((max, curr) => max < curr ? curr : max)
        // console.log(max_val)
        // MissionUtils.Console.print(checkScore)


        let winners = []
        checkScore.forEach((e) => {
            if (max_val === e.score) {
                winners.push(`${e.name}`);
            } 
          });
          MissionUtils.Console.print(`최종 우승자 : ${winners}`)
    }
}