export function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

// BEGIN (write your solution here)
Point.prototype.toString = function toString() {
  return `(${this.getX()}, ${this.getY()})`;
};

// END

export function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}
  
Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};
  
Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

// BEGIN
Segment.prototype.toString = function toString() {
  return `[${this.getBeginPoint().toString()}, ${this.getEndPoint().toString()}]`;
};
// END