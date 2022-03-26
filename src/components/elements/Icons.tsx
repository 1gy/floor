import { createSvgIcon } from "@mui/material/utils";

export const PlayArrowIcon = createSvgIcon(
  <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />,
  "PlayArrowIcon"
);

export const PauseIcon = createSvgIcon(<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />, "PauseIcon");

export const VolumeDownIcon = createSvgIcon(
  <path d="M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02 0-1.77-1.02-3.29-2.5-4.03zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z" />,
  "VolumeDownIcon"
);

export const VolumeUpIcon = createSvgIcon(
  <path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" />,
  "VolumeUpIcon"
);

export const CloseIcon = createSvgIcon(
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />,
  "CloseIcon"
);
