import { createContext, useState, useContext } from "react";
import User from "@/domain/entities/user.entity";

import { UserRepository } from "@/data/repositories/user.repository.impl";

import { LoginUserUseCase } from "@/domain/usecases/login.usecase";
import { RegisterUserUseCase } from "@/domain/usecases/register.usecase";
import { ConfirmEmailUseCase } from "@/domain/usecases/confirm-email.usecase";
import { ResetPasswordUseCase } from "@/domain/usecases/reset-password.usecase";

const userRepository = new UserRepository();

const loginUserUseCase = new LoginUserUseCase(userRepository);
const registerUserUseCase = new RegisterUserUseCase(userRepository);
const confirmEmailUseCase = new ConfirmEmailUseCase(userRepository);
const resetPasswordUseCase = new ResetPasswordUseCase(userRepository);

const userMock: User = {
  name: "context user",
  email: "context@email.com",
  password: "123456",
  username: "contextuser",
  phone: "01234567890",
  type: "student",
};

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  useCases: {
    login: LoginUserUseCase;
    register: RegisterUserUseCase;
    confirmEmail: ConfirmEmailUseCase;
    resetPassword: ResetPasswordUseCase;
  };
};

export const UserContext = createContext<UserContextType>({
  user: userMock,
  setUser: () => {},
  useCases: {
    login: loginUserUseCase,
    register: registerUserUseCase,
    confirmEmail: confirmEmailUseCase,
    resetPassword: resetPasswordUseCase,
  },
});

export const useUser = () => useContext(UserContext);

export const useUserUseCases = () => useContext(UserContext).useCases;

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(userMock);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        useCases: {
          login: loginUserUseCase,
          register: registerUserUseCase,
          confirmEmail: confirmEmailUseCase,
          resetPassword: resetPasswordUseCase,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
