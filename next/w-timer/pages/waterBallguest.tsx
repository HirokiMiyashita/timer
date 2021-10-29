import { useRouter } from "next/dist/client/router";
import axios from "axios";
import { useState, useCallback, useRef } from "react";
import Head from "../component/Head/Head";
import Button from "@material-ui/core/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import * as Styeld from "../component/styled";

const useStyles = makeStyles(() =>
  createStyles({
    positionL: {
      width: "30%",
      position: "fixed",
      bottom: "1%",
      left: "1%",
    },
    positionC: {
      width: "30%",
      position: "fixed",
      bottom: "1%",
      left: "35%",
    },
    positionR: {
      width: "30%",
      position: "fixed",
      bottom: "1%",
      right: "1%",
    },
    paddingT: {
      paddingTop: "10%",
    },
    paddingB: {
      paddingBottom: "10%",
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
      border: "solid red 1px",
    },
    inputCenter: {
      width: "80%",
      border: "solid red 1px",
    },
    flex: {
      paddingTop: "1rem",
      display: "flex",
    },
    nonecard: {
      display: "none",
    },
  })
);

const WaterBall: React.VFC = () => {
  // 値の初期設定
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [AddList, setAddList] = useState(false);
  const intervalRef = useRef<any>(null);
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: any) => {
    setName(() => e.target.value);
  };
  console.log(name);

  // タイマーの開始
  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);
  }, []);
  // タイマーの停止
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const dateMove = () => {
    axios
      .post("http://localhost:80/api/guest", {
        name: name,
        studies_time: count,
        category: "デザイン",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    router.push({
      pathname: "/Data",
      query: { count },
    });
  };
  return (
    <div>
      <Head />
      <h1 className={classes.paddingT}>{count}</h1>
      {/* <LoginHooks /> */}
      <Button
        variant="contained"
        color="primary"
        onClick={start}
        className={classes.positionL}
      >
        スタート
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={stop}
        className={classes.positionC}
      >
        ストップ
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={dateMove}
        className={classes.positionR}
      >
        終了
      </Button>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">名前を教えてね♪</DialogTitle>
          <DialogContent>
            <Styeld.input
              id="standard-basic"
              label="氏名"
              variant="standard"
              onChange={handleChange}
            ></Styeld.input>
          </DialogContent>
          <DialogActions>
            <Styeld.button
              onClick={handleClose}
              color="primary"
              variant="contained"
              autoFocus
            >
              決定
            </Styeld.button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default WaterBall;
