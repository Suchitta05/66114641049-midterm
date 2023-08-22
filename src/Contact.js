import React from "react";
import { Layout } from "./App";

function Contact() {
  return (
    <>
      <Layout />
      <div
        className="intro"
        style={{
          width: "150%",
          height: "150%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="/04.jpg"
          style={{ width: "300px", height: "300px" }}
        ></img>
        <h1>สุจิตรา มูลพันธ์</h1>
        <p>
          นักศึกษาคณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศและการสื่อสาร
          <br />
          มหาวิทยาลัยอุบลราชธานี ชื่นชอบในการใช้คอมพิวเตอร์และการเขียนโปรแกรม
          <br />
          งานอดิเรก ทำอาหาร ดูหนัง ฟังเพลง
          <br />
        </p>
      </div>
    </>
  );
}

export default Contact;