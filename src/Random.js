import { MissionUtils } from "@woowacourse/mission-utils";
// 종

const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
console.log(computer)

let currentScore = '';
    this.cars.forEach((e) => {
      if (MissionUtils.Random.pickNumberInRange(1, 9) >= 4) {
        e.score += '-';
      }
      currentScore += `${e.name}: ${e.score} <br/>`;
    });
    this.view.printScores(`${currentScore}<br/>`);
  }