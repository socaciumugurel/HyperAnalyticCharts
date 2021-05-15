import { createAction } from "typesafe-actions";

export const handleInnerRadiusChange = createAction(
  "HANDLE_INNER_RADIUS_CHANGE"
)<number>();
export const handlePadAngleChange = createAction(
  "HANDLE_PAD_ANGLE_CHANGE"
)<number>();
export const handleCornerRadiusChange = createAction(
  "HANDLE_CORNER_RADIUS_CHANGE"
)<number>();
export const handleMarginTopChange = createAction(
  "HANDLE_MARGIN_TOP_CHANGE"
)<number>();
export const handleMarginRightChange = createAction(
  "HANDLE_MARGIN_RIGHT_CHANGE"
)<number>();
export const handleMarginBottomChange = createAction(
  "HANDLE_MARGIN_BOTTOM_CHANGE"
)<number>();
export const handleMarginLeftChange = createAction(
  "HANDLE_MARGIN_LEFT_CHANGE"
)<number>();
export const handleBorderWidthChange = createAction(
  "HANDLE_BORDER_WIDTH_CHANGE"
)<number>();
export const handleEnableRadialLabelsChange = createAction(
  "HANDLE_ENABLE_RADIAL_LABELS_CHANGE"
)<boolean>();
export const handleRadialLabelSkipAngleChange = createAction(
  "HANDLE_RADIAL_LABEL_SKIP_ANGLE_CHANGE"
)<number>();
export const handleRadialLabelsTextXOffsetChange = createAction(
  "HANDLE_RADIAL_LABELS_TEXT_OFFSET_CHANGE"
)<number>();
export const handleRadialLabelsLinkOffsetChange = createAction(
  "HANDLE_RADIAL_LABEL_LINK_OFFSET_CHANGE"
)<number>();
export const handleRadialLabelsLinkDiagonalLengthChange = createAction(
  "HANDLE_RADIAL_LABELS_LINK_DIAGONAL_LENGTH_CHANGE"
)<number>();
export const handleRadialLabelsLinkHorizontalLengthChange = createAction(
  "HANDLE_RADIAL_LABELS_LINK_HORIZONAL_LENGTH_CHANGE"
)<number>();
export const handleEnableSlicesLabelsChange = createAction(
  "HANDLE_ENABLE_SLICES_LABELS_CHANGE"
)<boolean>();
export const handleSlicesLabelsSkipAngleChange = createAction(
  "HANDLE_SLICES_LABELS_SKIP_ANGLE_CHANGE"
)<number>();
