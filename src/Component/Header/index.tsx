import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { logout } from "@/Service/Auth";
import { useDispatch } from "react-redux";
import { remove_userInfo } from "@/Data/Slices/AuthReducer";

const Header = () => {
  const dispatch = useDispatch();

  const onClickLogout = () => {
    logout()
      .then(() => {
        dispatch(remove_userInfo());
        alert("로그아웃 되었습니다.");
        window.location.reload();
      })
      .catch(() => {
        alert("로그아웃 과정에서 에러가 발생하였습니다.");
      });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gaonnuri Todo
        </Typography>
        <Button color="inherit" onClick={onClickLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
