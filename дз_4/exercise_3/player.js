var player = {
    counter: 0,
    render(сheckAnswer) {
        if (сheckAnswer === true) {
            this.counter++;
            console.log("Это правильный ответ!" + "\n" + "Счёт: " + this.counter);
            return true;
        } else {
            console.log("Ответ не верный. Ты проиграл!" + "\n" + "Игра окончена!" +
                "\n" + "Счёт: " + this.counter)
            return false;
        }
    }
};