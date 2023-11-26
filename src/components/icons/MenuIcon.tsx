export const MenuIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="30"
      height="18"
      viewBox="0 0 30 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${color} transition`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 2H0V0H30V2ZM30 10H0V8H30V10ZM30 18H0V16H30V18Z"
      />
    </svg>
  );
};
