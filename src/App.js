import { MissionUtils } from "@woowacourse/mission-utils";
import User from "./UserInput.js";


class App {
  async play() {
    MissionUtils.Console.print('자동차 경주 게임을 시작합니다.');
    // 여기에서
    // InputCarName() --- Carname.js 파일에 있는 함수 
    // PlayNumber.userInputPlayNumber() --- PlayNumber.js 파일에 있는 함수
    // 이렇게 실행시키고 싶은데 어케해야하는 걸가...!

    const user = new User
    user.userInputCarName()
    


  }

}



export default App;
