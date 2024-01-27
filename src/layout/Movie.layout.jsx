import Footer from "../components/Footer/Footer.Component";

// component
import Navbar from "../components/Navbar/Navbar.Component";

const MovielayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
      </div>
    );
  };

export default MovielayoutHoc;
