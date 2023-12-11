import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h3>This is about page</h3>
      <Outlet></Outlet>
    </div>
  );
}
