var game = {
    start() {
        console.log("игра начата");
        for (var i = 0; i < config.length; i++) {
            renderer.render(i);
            const answer = process.getAnswer();
            const сheckAnswer = process.сheckAnswer(answer, i);
            if (!player.render(сheckAnswer)) {
                break;
            }
        }
        if (player.counter === 3)
            console.log("Ты победил со счётом: " + player.counter + "! Игра закончена!");
    },

    init() {
        console.log("Приветствуем в игре 'Кто хочет стать миллионером?' ");
        console.log("Для начала игры наберите game.start()");
    },
};

game.init();