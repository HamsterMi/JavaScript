let mover = {
    getDirection() {
        const avaliableDirection = [2, 4, 6, 8];
        while (true) {
            let direction = parseInt(prompt("Введите направление: 2,4,6,8"))
            if (isNaN(direction)) {
                return null;
            }
            if (!avaliableDirection.includes(direction)) {
                alert("Для перемещения введите 2,4,6,8");
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
            default:
                console.log("error")
        }
        return nextPosition;
    }
};