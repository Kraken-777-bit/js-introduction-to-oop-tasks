// BEGIN
function Point(x, y) {
    this.x = x;
    this.y = y;
  
    this.getX = function() {
      return this.x;
    };
  
    this.getY = function() {
      return this.y;
    };
}
  
function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
  
    this.getBeginPoint = function() {
      return this.beginPoint;
    };
  
    this.getEndPoint = function() {
      return this.endPoint;
    };
}
  
function reverse(segment) {
    const origBegin = segment.getBeginPoint();
    const origEnd = segment.getEndPoint();
  
    const newBegin = new Point(origEnd.x, origEnd.y);
    const newEnd = new Point(origBegin.x, origBegin.y);
  
    return new Segment(newBegin, newEnd);
}
  
export { Point, Segment, reverse };
// END
  