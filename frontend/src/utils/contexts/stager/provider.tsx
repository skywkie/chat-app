import type { ReactNode } from "react";

import { StageContext } from "./index";

import { useLimitCounter } from "@utils/hooks/useLimitCounter";

interface StageContextProviderProps {
  stages: ReactNode[];
}

export const StageContextProvider = ({ stages }: StageContextProviderProps) => {
  const {
    count: stageIndex,
    decrement: goToPreviousStage,
    increment: goToNextStage,
    setCount: setStageIndex,
  } = useLimitCounter(0, 0, stages.length - 1);

  return (
    <StageContext.Provider
      value={{ stages, stageIndex, goToNextStage, goToPreviousStage, setStageIndex }}
    >
      {stages[stageIndex]}
    </StageContext.Provider>
  );
};
