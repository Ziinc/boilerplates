import { Outlet } from "react-router";

const BaseLayout: React.FC = () => (
  <main className="flex flex-col h-screen ">
    <Outlet />
  </main>
);

export default BaseLayout;
