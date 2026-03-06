//pages/Landing.page.tsx
import { Link } from "react-router"

export const Landing = () => {
    return(
        <>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/home">Add</Link>
        </>
    )
}