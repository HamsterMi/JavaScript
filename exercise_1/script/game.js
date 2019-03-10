"use strict";

let game = {
  tickInterval: null,

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
    //создаем счетчик
    //в  this.counter вернется return - увеличение счетчика
    this.counter = this.makeCounter();
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
      this.finish();
    }

    if (food.isFoodPoint(snake.getNextStepHeadPoint())) {
      snake.incrementBody();
      //Счетчик увеличиваем
      this.counter();
      food.setCoordinates(this.getRandomCoordinates(food));
      barrier.setCoordinates(this.getRandomCoordinates(barrier));

      if (this.isGameWon()) {
        this.finish();
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
        return rndPoint;
      }
    }
  },

  //счетчик через замыкание
  makeCounter() {
    var curentCount = 0;
    let scorer = document.getElementById("scorer");
    scorer.innerHTML = "Cчет: 0";
    return function() {
      curentCount++;
      scorer.innerHTML = "Cчет: " + curentCount;
    };
  }
};

window.onload = () => game.init({ speed: 5, winLength: 5 });
