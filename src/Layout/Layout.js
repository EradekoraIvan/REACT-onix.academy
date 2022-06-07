import { Outlet } from "react-router-dom";
import Header from "../component/header/header";
import Footer from "../component/footer/footer";
import Description from "../component/landing_page/description/description";


const Layout = () => {
    return (
        <>
            <Description />
            <Header header_style={'header_style'}/>
            <Outlet />
            <Footer />
        </>
    )
}

export { Layout }