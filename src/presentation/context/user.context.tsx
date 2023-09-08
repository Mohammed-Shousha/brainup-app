import { createContext, useContext } from "react";

import UserRepository from "@/data/repositories/user.repository.impl";

import LoginUserUseCase from "@/domain/usecases/auth/login.usecase";
import RegisterUserUseCase from "@/domain/usecases/auth/register.usecase";
import ConfirmEmailUseCase from "@/domain/usecases/auth/confirm-email.usecase";
import ResetPasswordUseCase from "@/domain/usecases/auth/reset-password.usecase";

const userRepository = new UserRepository();

const loginUserUseCase = new LoginUserUseCase(userRepository);
const registerUserUseCase = new RegisterUserUseCase(userRepository);
const confirmEmailUseCase = new ConfirmEmailUseCase(userRepository);
const resetPasswordUseCase = new ResetPasswordUseCase(userRepository);

type UserContextType = {
  useCases: {
    login: LoginUserUseCase;
    register: RegisterUserUseCase;
    confirmEmail: ConfirmEmailUseCase;
    resetPassword: ResetPasswordUseCase;
  };
};

const userContextDefaultValue: UserContextType = {
  useCases: {
    login: loginUserUseCase,
    register: registerUserUseCase,
    confirmEmail: confirmEmailUseCase,
    resetPassword: resetPasswordUseCase,
  },
};

export const UserContext = createContext<UserContextType>(
  userContextDefaultValue
);

export const useUserUseCases = () => useContext(UserContext).useCases;

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return (
    <UserContext.Provider value={userContextDefaultValue}>
      {children}
    </UserContext.Provider>
  );
};
