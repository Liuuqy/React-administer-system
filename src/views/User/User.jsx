import { Outlet } from "react-router-dom";

export default function User() {
  return (
    <div>
      <h3>This is user Page</h3>
      <Outlet></Outlet>
    </div>
  );
}
