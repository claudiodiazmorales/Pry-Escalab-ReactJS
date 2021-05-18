import { auth, db, firebase } from "../firebase/firebase";

//Data initial

const dataInitial = {
  loading: false,
  active: false,
};

//types

const LOADING = "LOADING";
const USER_ERROR = "USER_ERROR";
const USER_TRUE = "USER_TRUE";
const CLOSE_SESSION = "CLOSE_SESSION";

//reducer

export default function userReducer(state = dataInitial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case USER_ERROR:
      return { ...dataInitial };

    case USER_TRUE:
      return { ...state, loading: false, user: action.payload, active: true };

    case CLOSE_SESSION:
      return { ...dataInitial };

    default:
      return { ...state };
  }
}

//action

export const loginUserAction = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    console.log(res.user);

    const user = {
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName,
      photoURL: res.user.photoURL,
    };

    const userDB = await db.collection('users').doc(user.email).get()
    if (userDB.exists){
      // cuando existe usuario en firestore

      dispatch({
        type: USER_TRUE,
        payload: userDB.data()
      });
      localStorage.setItem(
        "user",
        JSON.stringify(userDB.data())
      );

    }else{
      // no existe usuario en firestore 
      await db.collection('users').doc(user.email).set(user);
      dispatch({
        type: USER_TRUE,
        payload: user
      });
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_ERROR,
    });
  }
};

export const readUserActiveAction = () => (dispatch) => {
  if (localStorage.getItem("user")) {
    dispatch({
      type: USER_TRUE,
      payload: JSON.parse(localStorage.getItem("user")),
    });
  }
};

export const closeSessionAction = () => (dispatch) => {
  auth.signOut();
  localStorage.removeItem("user");
  dispatch({
    type: CLOSE_SESSION,
  });
};
