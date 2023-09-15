import { createContext, useContext } from "react";

import AiRepository from "@/data/repositories/ai.repository.impl";

import GetAiResponseUseCase from "@/domain/usecases/ai/get-ai-response.usecase";

const aiRepository = new AiRepository();

const getAiResponseUseCase = new GetAiResponseUseCase(aiRepository);

type AiContextType = {
  useCases: {
    getAiResponse: GetAiResponseUseCase;
  };
};

const aiContextDefaultValue: AiContextType = {
  useCases: {
    getAiResponse: getAiResponseUseCase,
  },
};

export const AiContext = createContext<AiContextType>(aiContextDefaultValue);

export const useAiUseCases = () => useContext(AiContext).useCases;

type AiProviderProps = {
  children: React.ReactNode;
};

export const AiProvider: React.FC<AiProviderProps> = ({ children }) => {
  return (
    <AiContext.Provider value={aiContextDefaultValue}>
      {children}
    </AiContext.Provider>
  );
};
