import { useSelector } from "react-redux";

import type { RootState } from "@libs/redux/store";

export const useAppSelector = useSelector.withTypes<RootState>();
