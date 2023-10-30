// 이름입력 유효성검사
export default class Validation {
    static carNameValidation(nameInput) {
        try {
            this.checkNameLength(nameInput);
            this.checkBlankName(nameInput);
            this.checkDuplicatedName(nameInput);
        } catch (error) {
        throw error;
        }
        return true;
    }

    static checkNameLength (names) {
        if(names.some((name)=> name.length > 5)) {
            throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.')
        } return true;
    }

    static checkBlankName (names) {
        if(names.every((name) => name === '')) {
            throw new Error('[ERROR] 이름을 입력해주세요.')
        } return true;
    } 

    static checkDuplicatedName (names) {
        const set = new Set(names);
        if (set.size !== names.length){
            throw new Error('[ERROR] 중복된 값이 있습니다.')
        } return true
    };


    // static checkDuplicate(gameInput) {
    //     let uniqueNumber = new Set(gameInput);
    //     if (uniqueNumber.size !== gameInput.length) {
    //         throw new Error('[ERROR]서로 다른 숫자를 입력해주세요.')
    //     }
    // } 

    static checkPlayNumber(userInput) {
        if(isNaN(Number(userInput))) {
            throw new Error('[ERROR] 숫자만 입력 가능합니다.')
        } return true
    }
}
// 게임횟수 입력 유효성 검사

    

// export const checkCountValidation = (userInput) =>
//   !Number.isNaN(Number(userInput)) && Number(userInput) > 0;


    




// 참고
// static checkNumber(gameInput) {
//     if(isNaN(Number(gameInput))) {
//         throw new Error('[ERROR]숫자만 입력 가능합니다.')
//     } return true
    
// }





// 기본형
// static checkNameLength = (names) => (names.every((name) => name.length <= 5));
// static checkIncludeCommas = (names) => names.every((name) => name.includes(','));
// static checkBlankName = (names) => names.every((name) => name !== '');
// static checkDuplicatedName = (names) => {
// const set = new Set(names);
// return set.size === names.length;
// };

// 이렇게 간단하게 가능
// class Validator {
//     static validateNumber(value) {
//       const isDuplicate = new Set(value).size !== 3;
//       const userNumber = Number(value.join(''));
//       const isIncorrectRules =
//         value === "" || value.length > 5 || ;
//       if (isIncorrectRules)
//         throw new Error('숫자 야구 규칙에 맞게 입력해주세요.');
//       if (isDuplicate) throw new Error('서로 다른 숫자를 입력해주세요.');

//     static carNameValidation(nameInput)
//       const 
//       const inIncorredtRules = 
//       if (nameInput.every => (name))
//  
//       }
//   }
  
//   module.exports = Validator;