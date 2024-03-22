import { Container } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>
        <Header />
        {children}
      </Container>
      <Footer />
    </>
  );
};
export default Layout;
