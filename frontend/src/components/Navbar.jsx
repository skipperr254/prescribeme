import { useState } from "react"

import { AppBar, Toolbar, Container, Typography, Box, IconButton, Menu, MenuItem, Button, Tooltip, Avatar } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import MenuIcon from "@mui/icons-material/Menu"

const pages = ["Doctors", "Services", "About", "Contact"]

const Navbar = () => {
    const [anchorElement, setAnchorElement] = useState(null)

    const handleClick = (event) => {
        setAnchorElement(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorElement(null)
    }

    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' } }}/>

                    <Typography 
                        variant="h6" 
                        component="a" 
                        href="/" 
                        sx={{
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none",
                            display: { xs: "none", md: "flex" },
                            mr: 2,
                        }}>
                        LOGO
                    </Typography>

                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton 
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu 
                            id="menu-appbar"
                            sx={{ display: { xs: "block", md: "none" } }}
                            anchorEl={anchorElement}
                            open={Boolean(anchorElement)}
                            onClose={handleClose}
                            keepMounted
                            anchorOrigin={{ vertical: "bottom", horizontal: "left"}}
                            transformOrigin={{ vertical: "top", horizontal: "left"}}
                        >
                            {
                                pages.map(page => (
                                    <MenuItem key={page} onClick={handleClose}>
                                        <Typography>{page}</Typography>
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </Box>

                    <AdbIcon sx={{ display: { xs: "flex", md: "none" } }}/>

                    <Typography 
                        variant="h5" 
                        component="a" 
                        href="/" 
                        flexGrow={1}
                        sx={{
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none",
                            display: { xs: "flex", md: "none" },
                            mr: 2,
                        }}>
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleClose}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box>
                        <Tooltip title="Open settings">
                            <IconButton  sx={{ p: 0 }}>
                                <Avatar alt="Kionano" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar