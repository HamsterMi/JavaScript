"use strict";

let game = {
  tickInterval: null,
  score: null,

  init(userSettings = {}) {
    Object.assign(settings, userSettings);
    if (!settings.validate()) {
      return;
    }
    renderer.renderMap(settings.rowsCount, settings.colsCount);
    this.setEventHandlers();
    this.reset();
  },

  reset() {
    this.stop();
    this.setScrorer(0);
    snake.init(this.getStartSnakePoint(), "up");
    food.setCoordinates(this.getRandomCoordinates(food));
    barrier.setCoordinates(this.getRandomCoordinates(barrier));
    this.render();
  },

  render() {
    renderer.render(
      snake.body,
      food.getCoordinates(),
      barrier.getCoordinates()
    );
  },

  play() {
    //ставим статус в играем
    status.setPlaying();

    //запускать шаги змейки
    this.tickInterval = setInterval(
      () => this.tickHandler(),
      1000 / settings.speed
    );
    /*  this.setScrorer(); */
    //меняем кнопку игры на стоп
    this.changePlayButton("Стоп");
  },

  stop() {
    //ставим статус в стоп
    status.setStopped();
    //останавливаем шаги змейки
    clearInterval(this.tickInterval);
    //меняем кнопку игры на старт
    this.changePlayButton("Старт");
  },

  finish() {
    //ставим статус в финиш
    status.setFinished();
    //останавливаем шаги змейки
    clearInterval(this.tickInterval);
    //меняем кнопку игры, сделаем серой и напишем игра закончена
    this.changePlayButton("Игра закончена", true);
  },

  tickHandler() {
    if (!this.canSnakeMakeStep()) {
      this.finish();
      return;
    }

    if (barrier.isBarrierPoint(snake.getNextStepHeadPoint())) {
      console.log("мы врезались в барьер");
      this.finish();
    }

    if (food.isFoodPoint(snake.getNextStepHeadPoint())) {
      snake.incrementBody();

      this.setScrorer(1);

      food.setCoordinates(this.getRandomCoordinates(food));

      barrier.setCoordinates(this.getRandomCoordinates(barrier));

      if (this.isGameWon()) {
        this.finish();
        this.setScrorer(settings.winLength);
      }
    }

    snake.makeStep();
    this.render();
  },

  isGameWon() {
    return snake.body.length > settings.winLength;
  },

  canSnakeMakeStep() {
    let nextHeadPoint = snake.getNextStepHeadPoint();

    return (
      !snake.isBodyPoint(nextHeadPoint) &&
      nextHeadPoint.x < settings.colsCount &&
      nextHeadPoint.y < settings.rowsCount &&
      nextHeadPoint.x >= 0 &&
      nextHeadPoint.y >= 0
    );
  },

  setEventHandlers() {
    document
      .getElementById("playButton")
      .addEventListener("click", () => this.playClickHandler());
    document
      .getElementById("newGameButton")
      .addEventListener("click", () => this.newGameClickHandler());
    document.addEventListener("keydown", () => this.keyDownHandler(event));
  },

  playClickHandler() {
    if (status.isPlaying()) {
      this.stop();
    } else if (status.isStopped()) {
      this.play();
    }
  },

  newGameClickHandler() {
    this.reset();
  },

  keyDownHandler(event) {
    if (!status.isPlaying()) {
      return;
    }

    let direction = this.getDirectionByCode(event.code);
    if (this.canSetDirection(direction)) {
      snake.setDirection(direction);
    }
  },

  canSetDirection(direction) {
    return (
      (direction === "up" && snake.lastStepDirection !== "down") ||
      (direction === "right" && snake.lastStepDirection !== "left") ||
      (direction === "down" && snake.lastStepDirection !== "up") ||
      (direction === "left" && snake.lastStepDirection !== "right")
    );
  },

  getDirectionByCode(code) {
    switch (code) {
      case "KeyW":
      case "ArrowUp":
        return "up";
      case "KeyD":
      case "ArrowRight":
        return "right";
      case "KeyS":
      case "ArrowDown":
        return "down";
      case "KeyA":
      case "ArrowLeft":
        return "left";
      default:
        return "";
    }
  },

  changePlayButton(textContent, isDisabled = false) {
    let playButton = document.getElementById("playButton");
    playButton.textContent = textContent;
    isDisabled
      ? playButton.classList.add("disabled")
      : playButton.classList.remove("disabled");
  },

  getStartSnakePoint() {
    return {
      x: Math.floor(settings.colsCount / 2),
      y: Math.floor(settings.rowsCount / 2)
    };
  },

  getRandomCoordinates(someObj) {
    
    let exclude = [someObj.getCoordinates(), ...snake.body];

    console.log(exclude);
    while (true) {
      //случайная точка в пределах игрового поля
      let rndPoint = {
        x: Math.floor(Math.random() * settings.colsCount),
        y: Math.floor(Math.random() * settings.rowsCount)
      };

      //проверяем не содержится ли в массиве exclude нашей случайной точки
      let excludeContainsRndPoint = exclude.some(function(exPoint) {
        return rndPoint.x === exPoint.x && rndPoint.y === exPoint.y;
      });

      //if (координата не содержится в массиве exclude)
      if (!excludeContainsRndPoint) {
        console.log(rndPoint);
        return rndPoint;
      }
    }
  },

  //задаем счетчик
  setScrorer(scoreIncr) {
    if (scoreIncr === 1) {
      this.score += 1;
    } else if (scoreIncr === 0) {
      this.score = 0;
    } else {
      this.score += ".Ты победил!";
    }
    let scorer = document.getElementById("scorer");
    scorer.innerHTML = "Cчет: " + this.score;
  }
};

window.onload = () => game.init({ speed: 5, winLength: 5 });
