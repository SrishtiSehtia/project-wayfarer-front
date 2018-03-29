import { auth } from './firebase';

//sign up

export const doCreateUserWithEmailAndPassword = (email, password) =>
auth.createUserWithEmailAndPassword(email,password);

//sign in
export const doSignInWithEmailAndPassword = (email,password) =>
auth.signInWithEmailAndPassword(email,password);

//sign out
export const doSignOut = () =>
// auth.signOut();
auth.signOut().then(() => {
    // We need to refresh otherwise redirect state is
    // persisted
    window.location = window.location.origin;
  });

//password reset
export const doPasswordReset = (email) =>
auth.sendPasswordResetEmail(email);

//password change
export const doPasswordUpdate = (password) =>
auth.currentUser.updatePassword(password);
