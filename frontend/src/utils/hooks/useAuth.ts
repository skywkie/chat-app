import type { RequestUserData } from "@utils/types";

import { useSignInMutation, useSignUpMutation, useLogOutMutation } from "@libs/redux/api/authApi";
import { setUser } from "@libs/redux/slices/authSlice";

import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const [signUpMutation, { isLoading: isSignUpLoading }] = useSignUpMutation();
  const [signInMutation, { isLoading: isSignInLoading }] = useSignInMutation();
  const [logOutMutation] = useLogOutMutation();

  const signIn = async (userData: RequestUserData) => {
    // eslint-disable-next-line
    try {
      const response = await signInMutation(userData).unwrap();

      const { user, isSuccess } = response;

      if (isSuccess) dispatch(setUser({ isAuthenticated: isSuccess, user }));

      return response;
    } catch (error) {
      // dispatch(setError)
      throw error;
    }
  };

  const signUp = async (userData: RequestUserData) => {
    try {
      // dispatch(setError)

      const response = await signUpMutation(userData).unwrap();

      const { user, isSuccess } = response;

      if (isSuccess) dispatch(setUser({ isAuthenticated: isSuccess, user }));

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

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return {
    isAuthenticated,
    isLoading: isSignInLoading || isSignUpLoading,
    user,
    signIn,
    signUp,
    logOut,
  };
};
