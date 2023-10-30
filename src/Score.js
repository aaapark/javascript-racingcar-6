import { MissionUtils } from "@woowacourse/mission-utils";
import User from './UserInput.js'

export default class Score {

    playGame(count) {
        console.log(count)
        // for(i =0 ; i < count ; i ++) {
        //     this.getScore()
        }
    

    getScore() {
        let currentScore =''
        this.car.forEach((element) => {
            if(MissionUtils.Random.pickNumberInRange(1, 9) >= 4) {
                element.score += '-'
            } 
            currentScore = `${element.score}`
        })
        MissionUtils.Console.print(currentScore)
    }s
}