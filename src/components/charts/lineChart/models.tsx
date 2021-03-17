export interface ILineActions {
  setStackedMode(value: boolean): void;
  setLineWidth(value: number): void;
  setYScaleValue(value: [number, number]): void;
  setLineType(value: LineType): void;
  setYScaleAuto(): void;
}

export type LineType =
  | "basis"
  | "cardinal"
  | "catmullRom"
  | "linear"
  | "monotoneX"
  | "monotoneY"
  | "natural"
  | "step"
  | "stepAfter"
  | "stepBefore";
