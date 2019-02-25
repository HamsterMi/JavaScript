let game = {
    run() {
        console.log("игра начата");
        var counter = 0;
        while (true) {
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра закончена");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            counter++;

            renderer.render();
            console.log("номер хода: ", counter)
        }
    },
    init() {
        console.log("ваше положение - 0 ");
        renderer.render();
        //отобразить игру
        console.log("Для начала игры наберите game.run()");
    },
};

game.init();