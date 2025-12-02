import type { UserData } from "@utils/types";

import { useSignInMutation, useSignUpMutation, useLogOutMutation } from "@libs/redux/api/authApi";

// import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export const useAuth = () => {
  // const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth);

  const [signUpMutation, { isLoading: isSignUpLoading }] = useSignUpMutation();
  const [signInMutation, { isLoading: isSignInLoading }] = useSignInMutation();
  const [logOutMutation] = useLogOutMutation();

  const signIn = async (userData: UserData) => {
    try {
      const response = await signInMutation(userData).unwrap();

      return response;
    } catch (error) {
      const message = "error.data?.message";
      message.at(2);
      // dispatch(setError)
      throw error;
    }
  };

  const signUp = async (userData: UserData) => {
    try {
      // dispatch(setError)

      const response = await signUpMutation(userData).unwrap();

      return response;
    } catch (error) {
      const message = "error.data?.message";
      message.at(2);

      // dispatch(setError)
      throw error;
    }
  };

  const logOut = async () => {
    try {
      const response = await logOutMutation();

      return response;
    } catch (error) {
      const message = "error.data?.message";
      message.at(2);

      // dispatch(setError)
      throw error;
    }
  };

  return { isLoading: isSignInLoading || isSignUpLoading, user, signIn, signUp, logOut };
};
