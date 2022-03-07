import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar";
import PopMenu from "./PopMenu";
import SearchIcon from '@mui/icons-material/Search';
import OutlinedBtn from "../Buttons/OutlinedBtn";
import ContainedBtn from "../Buttons/ContainedBtn";

import { menus } from "./PopMenu";

const pages = [
    {
        text: "Udemy Business",
        body: "Get your team access to over 6,000 top Udemy courses, anytime, anywhere.",
        btn: "Try Udemy Business"
    }, {
        text: "Teach on Udemy",
        body: "Turn what you know into an opportunity and reach millions around the world.",
        btn: "Learn More"
    }
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            sx={{ bgcolor: "white", color: "black", py: 0.5 }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Stack sx={{ width: "100%", px: 1 }} spacing={1.25} direction="row">
                        <Box
                            sx={{ display: { xs: "none", md: "flex" }, maxWidth: "6rem" }}
                        >
                            <img style={{ width: "100%" }} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="logo" />
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                                color: "black",
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon sx={{ color: "black" }} />
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {menus.map((page) => (
                                    <MenuItem key={page.Field+"1"} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.Field}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box
                            sx={{ display: { xs: "flex", md: "none" }, width: "80%"}}
                        >
                            <img
                                style={{ width: "6rem", margin: "auto" }}
                                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="logo"
                            />
                        </Box>

                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <PopMenu />
                        </Box>

                        <Box sx={{ display: { xs: "none", md: "flex" }, width: "48%" }}>
                            <SearchBar />
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
                            {pages.map((page) => (
                                <PopMenu key={page.text} text={page.text}>
                                    <Container sx={{ 
                                        pb: 2
                                    }} >
                                        <Typography variant="body1"
                                            sx={{ 
                                                textAlign: "center",
                                                fontWeight: 600,
                                                py: 1,
                                            }} 
                                        >
                                            {page.body}
                                        </Typography>
                                        <ContainedBtn text={page.btn} sx={{px: 3, py: 2.5, height: "30px",minWidth: "stretch"}} />
                                    </Container>
                                </PopMenu>
                            ))}
                        </Box>

                        <Stack direction="row" spacing={2}>
                            <IconButton
                                disableRipple
                                sx={{
                                    color: "black",
                                    borderRadius: "0px",
                                    display: {
                                        xs: "flex",
                                        md: "none"
                                    },
                                    "&:hover": {
                                        color: "slateblue",
                                    },
                                }}
                            >
                                <SearchIcon />
                            </IconButton>
                            <IconButton
                                disableRipple
                                sx={{
                                    color: "black",
                                    borderRadius: "0px",
                                    "&:hover": {
                                        color: "slateblue",
                                    },
                                }}
                            >
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{ pt: 1.5, display: { xs: "none", md: "flex" } }}>
                            <OutlinedBtn text="Log in" />
                            <ContainedBtn text="Sign up" />

                            <IconButton
                                variant="outlined"
                                sx={{
                                    color: "black",
                                    borderRadius: "0px",
                                    height: "40px",
                                    border: "1px solid #444",
                                }}
                            >
                                <LanguageIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;