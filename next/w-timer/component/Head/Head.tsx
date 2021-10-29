import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    date: {
      border: "sored red 1px",
      marginLeft: "4.2em",
    },
    marginL: {
      marginLeft: "2rem",
    },
    card: {
      width: "80%",
      position: "absolute",
      top: "20%",
      left: "10%",
      textAlign: "center",
      paddingTop: "1rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "2rem",
      boxShadow: "0 10px 25px 10px rgba(60, 194, 235, 0.5)",
    },
    inputCenter: {
      width: "80%",
    },
    flex: {
      paddingTop: "1rem",
      display: "flex",
    },
    nonecard: {
      display: "none",
    },
    bottonMargin: {
      marginLeft: "1rem",
    },
  })
);

export default function Head() {
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [AddList, setAddList] = useState(false);
  const [text, setText] = useState("");
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addItemListOpen = () => {
    setAddList(true);
    setOpen(false);
  };
  const addItemListClose = () => {
    setAddList(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(() => e.target.value);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            {/* Headタイトル */}
            <Typography variant="h6" noWrap className={classes.date}>
              {month}月{day}日
            </Typography>
            {/* Headタイトル */}
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                // バツのアイコンに変更
                <Close />
              ) : (
                <Close />
              )}
            </IconButton>
          </div>
          {router.pathname == "/component/WaterBall" ? (
            <List>
              <ListItem button onClick={addItemListOpen}>
                <ListItemIcon>
                  <AddIcon />
                  <ListItemText
                    primary="項目追加"
                    className={classes.marginL}
                  />
                </ListItemIcon>
              </ListItem>
              {["ホーム", "レコード"].map((text) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          ) : (
            <List>
              {["ホーム", "レコード"].map((text) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          )}
        </Drawer>
      </div>
      <Card className={AddList ? classes.card : classes.nonecard}>
        <Typography variant="body1">項目を入力してください</Typography>
        <div className={classes.flex}>
          <input
            type="text"
            value={text}
            className={classes.inputCenter}
            onChange={handleChange}
          />
          <Button
            color="primary"
            variant="contained"
            onClick={addItemListClose}
            className={classes.bottonMargin}
          >
            追加
          </Button>
        </div>
      </Card>
    </>
  );
}
