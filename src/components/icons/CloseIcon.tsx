export const CloseIcon = ({
  color,
  size = "20",
}: {
  color: string;
  size?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${color} transition`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.05691 9.99997L1.52832 2.47137L2.47113 1.52856L9.99972 9.05716L17.5283 1.52856L18.4711 2.47137L10.9425 9.99997L18.4711 17.5286L17.5283 18.4714L9.99972 10.9428L2.47113 18.4714L1.52832 17.5286L9.05691 9.99997Z"
      />
    </svg>
  );
};
