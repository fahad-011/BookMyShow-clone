import Footer from "../components/Footer/Footer.Component";
// component
import Navbar from "../components/Navbar/Navbar.Component";

const DefaultlayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <Footer />
      </div>
    );
  };

export default DefaultlayoutHoc;
