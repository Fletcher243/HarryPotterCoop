import { getDatabase, ref, set } from "firebase/database";

export function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: userId,
    email: email,
    profile_picture : imageUrl
  });
}
