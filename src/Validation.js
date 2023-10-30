export default class Validation {
// 이름입력 유효성검사
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
        if(names.some((name) => name === '')) {
            throw new Error('[ERROR] 이름을 입력해주세요.')
        } return true;
    } 

    static checkDuplicatedName (names) {
        const set = new Set(names);
        if (set.size !== names.length){
            throw new Error('[ERROR] 중복된 값이 있습니다.')
        } return true
    };

// 게임횟수입력 유효성검사
    static checkPlayNumber(userInput) {
        if(isNaN(Number(userInput))) {
            throw new Error('[ERROR] 숫자만 입력 가능합니다.')
        } return true
    }
}