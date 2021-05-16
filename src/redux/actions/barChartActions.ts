import { createAction } from "typesafe-actions";

export const handleInnerPadding = createAction(
  "HANDLE_INNER_PADDING"
)<number>();
