import React from "runtime-library/lib/react"
import AppBar from "runtime-library/lib/@mui/material/AppBar"
import Box from "runtime-library/lib/@mui/material/Box"
import Toolbar from "runtime-library/lib/@mui/material/Toolbar"
import Typography from "runtime-library/lib/@mui/material/Typography"
import IconButton from "runtime-library/lib/@mui/material/IconButton"
import Menu from "runtime-library/lib/@mui/material/Menu"
import MenuItem from "runtime-library/lib/@mui/material/MenuItem"
import MenuIcon from "runtime-library/lib/@mui/icons-material/Menu"
import Link from "runtime-library/lib/@mui/material/Link"

export function Navigation(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  console.log("test")
  const links = [
    {
      name: "Induct Dashboard",
      url: "http://localhost:3004",
    },
    {
      name: "Sorter Dashboard",
      url: "http://localhost:3003",
    },
    {
      name: "Area Dashboard",
      url: "http://localhost:3002",
    },
    {
      name: "Efthy Dashboard",
      url: "http://localhost:3002",
    },
  ]
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: "#333"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
            onClick={handleOpenUserMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            sx={{mt: "45px"}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {links.map(link => (
              <MenuItem key={link.name} onClick={handleCloseUserMenu}>
                <Link href={link.url} underline="none" sx={{color: "#333"}}>
                  <Typography textAlign="center">{link.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            {props.appName}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, textAlign: "right", fontSize: ".8rem"}}
          >
            Next Warehouse
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navigation
