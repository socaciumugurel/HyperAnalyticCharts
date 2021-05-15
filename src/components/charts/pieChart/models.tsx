export interface IPieChartActions {
  handleInnerRadiusChange(value: number): void;
  handlePadAngleChange(value: number): void;
  handleCornerRadiusChange(value: number): void;
  handleMarginTopChange(value: number): void;
  handleMarginRightChange(value: number): void;
  handleMarginBottomChange(value: number): void;
  handleMarginLeftChange(value: number): void;
  handleBorderWidthChange(value: number): void;
  handleEnableRadialLabelsChange(value: boolean): void;
  handleRadialLabelSkipAngleChange(value: number): void;
  handleRadialLabelsTextXOffsetChange(value: number): void;
  handleRadialLabelsLinkOffsetChange(value: number): void;
  handleRadialLabelsLinkDiagonalLengthChange(value: number): void;
  handleRadialLabelsLinkHorizontalLengthChange(value: number): void;
  handleEnableSlicesLabelsChange(value: boolean): void;
  handleSlicesLabelsSkipAngleChange(value: number): void;
}
