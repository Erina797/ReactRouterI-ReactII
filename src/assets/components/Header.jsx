import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <>
            <Box
                className="d-flex justify-content-around"
                sx={{
                    color: "white",
                    width: "100vw",
                    height: "10vh",
                    backgroundColor: "red",
                }}
            >
                <div className="d-flex align-items-center">
                    <Button variant="text" sx={{ color: "white" }}>
                        <NavLink to="/" className="navbar-brand">🏡 Home</NavLink>
                    </Button>
                    <Button variant="text" sx={{ color: "white" }}>
                        <NavLink to="/contact" className="navbar-brand">📒 Contacto</NavLink>
                    </Button>
                </div>



                <Typography variant="h5" className="d-flex align-items-center">
                    <NavLink to="/" className="navbar-brand">Happy Cake 🍰</NavLink>
                </Typography>

            </Box>
        </>
    )
}