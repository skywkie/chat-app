import { useDispatch } from "react-redux";

import type { AppDispatch } from "@libs/redux/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
