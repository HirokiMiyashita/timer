import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Data: React.VFC = () => {
  const router = useRouter();
  const [values, setValues] = useState<any[] | null>();
  const sumNum = Number(router.query.count);
  const [n, setN] = useState(Number);
  const num: number = sumNum;
  const timeD: number = Math.floor(num / (24 * 60 * 60));
  const timeH: number = Math.floor((num % (24 * 60 * 60)) / (60 * 60));
  const timeM: number = Math.floor(((num % (24 * 60 * 60)) % (60 * 60)) / 60);
  const timeS: number = ((num % (24 * 60 * 60)) % (60 * 60)) % 60;
  const timeDMS: string =
    timeD + "日" + timeH + "時間" + timeM + "分" + timeS + "秒";

  useEffect(() => {
    const fn = async () => {
      const response = await axios
        .get<any[]>(`http://localhost:80/api/getdate`)
        .catch((err) => {
          console.log(err);
        });
      if (response == null) {
        setValues(null);
        return;
      }
      setValues(response.data);
    };
    fn();
  }, []);
  return (
    <>
      {values?.map((value, index) => (
        <>
          {/* {setN(Number(value.studies_time))} */}
          <p key={index}>{value.name}</p>
          <p>{value.studies_time}</p>
          <p>{value.category}</p>
        </>
      ))}
    </>
  );
};

export default Data;
