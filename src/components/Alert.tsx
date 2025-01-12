import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  active?: boolean;
}
const Alert = ({ children, active = false }: Props) => {
  return (
    <div
      className={
        active ? "alert alert-warning alert-dismissible fade show" : "d-none"
      }
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
