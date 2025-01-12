interface Props {
  color?: "primary" | "secondary" | "danger" | "warning";
  children: string;
  onClick: () => void;
}
const PrimaryButton = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
