// BEGIN
const each = (objects, callback) => {
    for (let i = 0; i < objects.length; i++) {
        callback.call(objects[i]);
    }
};
  
export default each;
// END
  