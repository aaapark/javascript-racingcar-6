import { MissionUtils } from "@woowacourse/mission-utils";

export default class Score {

    playGame(count,name) {
        // console.log(count)
        MissionUtils.Console.print('실행결과')
        for(let i = 0 ; i < count ; i ++) {
            this.getScore(name);
        } this.getWinner(name)

    }

    getScore(name) {
        let currentScore =''
        this.totalScore = ''
        
        name.forEach((element) => {
            if(MissionUtils.Random.pickNumberInRange(1, 9) >= 4) {
                element.score += '-'
            }
            currentScore += `${element.name }: ${element.score} \n`;
            this.totalScore += `${element.name}: ${element.score.length} \n`;
        })
        MissionUtils.Console.print(currentScore)
    }
    
    getWinner(name) {
        MissionUtils.Console.print(name)

        let checkScore = []
        name.map((element) => {
            checkScore.push(element.name, element.score)
        });
        MissionUtils.Console.print(checkScore)


    }
}