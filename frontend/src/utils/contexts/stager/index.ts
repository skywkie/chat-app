import { createContext, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface StageContext {
  stages: ReactNode[];
  stageIndex: number;
  goToNextStage: () => void;
  goToPreviousStage: () => void;
  setStageIndex: Dispatch<SetStateAction<number>>;
}

export const StageContext = createContext<StageContext | null>(null);
