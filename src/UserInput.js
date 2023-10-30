import { MissionUtils } from "@woowacourse/mission-utils";
import Validation from './Validation.js'
import Score from "./Score.js";


export default class User {
    async userInputCarName() {
        const inputCarName = await MissionUtils.Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : ').then(
            (value) => value
        )                  
        this.getCarNames(inputCarName)
    }

    getCarNames(userInput) {
        let cars = [];
        let names = userInput.split(',');
        names.map((element) => {cars.push((element))});
        
        this.checkName(names)
        this.userInputPlayNumber()
    }  
    
    checkName(names) {
        try {
            Validation.carNameValidation(names);
        } catch(e) {
          throw e
        }
        MissionUtils.Console.print(names)

    }

    async userInputPlayNumber() {
        const inputPlayNumer = await MissionUtils.Console.readLineAsync(
            '시도할 횟수는 몇 회인가요?').then(
            (value) => value
        )
        try {
            Validation.checkPlayNumber(inputPlayNumer)
        } catch(e) {
          throw(e)
        }          
        MissionUtils.Console.print(inputPlayNumer)
        const count = Score.playGame(inputPlayNumer)
        console.log(count)
    }

  
}

// const inputcarname = new CarName();
// inputcarname.userInputCarName();


// export function checkingScore (computerInputNumber, userInputNumbers) {
//     let strike = 0;
//     let ball = 0
//     for (let i = 0; i <3; i++) {
//         if (computerInputNumber[i] === userInputNumbers[i]) {
//             strike += 1;
//         }
//         else if (computerInputNumber.includes(userInputNumbers[i])) {
//             ball += 1;
//         }
//     }
//     return {strike, ball}