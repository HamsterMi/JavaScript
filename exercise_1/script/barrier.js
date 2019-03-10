let barrier = {
  x: null,
  y: null,

  setCoordinates(point) {
    this.x = point.x;
    this.y = point.y;
  },

  getCoordinates() {
    return {
      x: this.x,
      y: this.y
    };
  },

  isBarrierPoint(point) {
    return this.x === point.x && this.y === point.y;
  }
};
