// BEGIN
function magic(...args) {
    let sum = args.reduce((acc, num) => acc + num, 0);
    function inner(...args2) {
        const newSum = sum + args2.reduce((acc, num) => acc + num, 0);
        const nextInner = magic(newSum);
    
        return nextInner;
    }
    inner.valueOf = function() {
      return sum;
    };
    //Возвращяет inner чтобы при присваивании можно было складыввать дальше
    return inner;
}
  
export default magic;  
// END
