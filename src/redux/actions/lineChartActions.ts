import { createAction } from "typesafe-actions";
import { LineType } from "../../components/charts/lineChart/models";

export const setLineWidth = createAction(
    "SET_LINE_WIDTH"
  )<number>();

  export const setYScaleAuto = createAction(
    "SET_Y_SCALE_AUTO"
  )();
  
export const setYScaleValue = createAction(
  "SET_Y_SCALE_VALUE"
)<[number,number]>();

export const setStackedMode = createAction(
  "SET_STACKED_MODE"
)<Boolean>();

export const setLineType = createAction(
  "SET_LINE_TYPE"
)<LineType>();