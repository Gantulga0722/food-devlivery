import { ResponsiveAppBar } from "./ResponsiveAppBar";
import { Footer } from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ResponsiveAppBar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
