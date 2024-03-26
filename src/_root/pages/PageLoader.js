import { PropagateLoader } from "react-spinners"

export const PageLoader = ({theme}) => {
    return (
        <div className="loader-page">
            <PropagateLoader color={theme === "light" ? "#424242" : "#fff"} />
        </div>
    )
}