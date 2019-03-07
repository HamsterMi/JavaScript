let food = {
  x: null,
  y: null,

  setCoordinates(point) {
    this.x = point.x;
    this.y = point.y;
  },


 getCoordinates(){
    return {
      x: this.x,
      y: this.y
    };
  },

  isFoodPoint(point) {
    return this.x === point.x && this.y === point.y;
  }
};
