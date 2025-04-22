// BEGIN
export const getMutualFriends = (user1, user2) => {
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();

  return friends1.filter((friend1) => {
    for (let i = 0; i < friends2.length; i++) {
      if (friends2[i].id === friend1.id) {
        return true;
      }
    }
    return false;
  });
};
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});