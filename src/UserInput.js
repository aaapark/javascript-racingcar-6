import { MissionUtils } from "@woowacourse/mission-utils";
import Validation from './Validation.js'
import Save from './ValueSave.js'
import Score from "./Score.js";


export default class User {
    async userInputCarName() {
        const inputCarName = await MissionUtils.Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) : \n').then(
            (value) => value
        )                  
        this.getCarNames(inputCarName)
    }

    getCarNames(userInput) {
        this.cars = [];
        let names = userInput.split(',');
        names.map((element) => {
            this.cars.push(new Save(element))
        });

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
            '시도할 횟수는 몇 회인가요? \n').then(
            (value) => value
        )
        try {
            Validation.checkPlayNumber(inputPlayNumer)
        } catch(e) {
          throw(e)
        }         
        let score = new Score
        score.playGame(inputPlayNumer,this.cars)
    } 
}