import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Loader from "../components/Loader";



export default function DefoultLayout() {

    const { isLoading } = useContext(GlobalContext)

    console.log(isLoading, 'isLoading DefoultLayout');



    return (

        <>
            <Header />

            <main>

                {isLoading && (
                    <Loader />
                )}

                <Outlet />

            </main>

            <Footer />
        </>
    )
}