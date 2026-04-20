import { Link } from "react-router-dom";
interface NavigateComponentProps {
  path: string;
  name: string;
  type: "button" | "link";
}
export const NavigateComponent = ({ path }: NavigateComponentProps) => {
  return <Link to={path}></Link>;
};
