let settings = {
  rowsCount: 21,
  colsCount: 21,
  speed: 2,
  winLength: 50,

  validate() {
    if (this.rowsCount < 10 || this.rowsCount > 30) {
      console.error(
        "Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30]."
      );
      return false;
    }

    if (this.colsCount < 10 || this.colsCount > 30) {
      console.error(
        "Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30]."
      );
      return false;
    }

    if (this.speed < 1 || this.speed > 10) {
      console.error(
        "Неверные настройки, значение speed должно быть в диапазоне [1, 10]."
      );
      return false;
    }

    if (this.winLength < 5 || this.winLength > 50) {
      console.error(
        "Неверные настройки, значение winLength должно быть в диапазоне [5, 50]."
      );
      return false;
    }

    return true;
  }
};
