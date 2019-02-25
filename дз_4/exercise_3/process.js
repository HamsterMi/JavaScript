var process = {
    getAnswer() {
        const avaliableAnswer = ["а", "б", "в", "г"];

        while (true) {
            var answer = prompt("Выберите ответ: а, б, в, г");
            if (!avaliableAnswer.includes(answer)) {
                alert("Выберите ответ: а, б, в, г");
                continue;
            }
            return answer;
        }
    },
    сheckAnswer(answer, i) {
        if (config[i][answer].trueAnswer) {
            сheckAnswer = true;
        } else {
            сheckAnswer = false;
        };
        return сheckAnswer;
    }
};