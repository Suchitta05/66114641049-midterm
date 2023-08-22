import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Image } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";

export function Layout() {
  return (
    <nav className="myNav p-2 mb-3 text-center sarabun">
      <NavLink 
        to="/" 
        className="link px-2" 
        style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "none" : "underline",
                  };
                }}
                >
                  หน้าแรก
                  </NavLink>
        <NavLink 
          to="/contact" 
          className="link px-2" 
          style={({ isActive }) => {
                  return {
                    textDecoration: isActive ? "none" : "underline",
                  };
                }}
                >
                  ผู้จัดทำ
                  </NavLink>
    </nav>
  );
}

function FoodList(props) {
  return (
      <div className="colum text-center">
        <Image className="rounded-circle img-fluid" 
        src={props.img} width="25%" />
        <h4 className="mitr">{props.name}</h4>
        <p className="itim">{props.desc}</p>
        <Button className="mb-3 itim bg-secondary">ดูวิธีทำ</Button>
      </div>
  );
}

function Footer() {
  return (
  <div className="text-center myNav links sarabun">2023 @ Developed by Suchitta M.</div>
  );
}
function Index() {
  return(
    <>
    <Container/>
      <Layout />
      <h4 className="mitr text-center underline mb-3 ">วิธีทำอาหารญี่ปุ่นยอดฮิต</h4>
        <div className="row">
          <FoodList
          img="/66114641049-midterm/01.webp"
          name="ข้าวหน้าหมูทอดทงคัตสึ"
          desc="ข้าวหมูทอดทงคัตสึ ข้าวหมูทอดสไตล์ญี่ปุ่น ที่จะทำให้คุณหลังรักการกินหมูทอด ด้วยสัมผัสที่กรอบนอกนุ่มใน อร่อยได้ในคำเดียว ทำให้เป็นหนึ่งในเมนูยอดนิยมของคนไทยเลยก็ว่าได้ ซึ่งสูตรนี้ได้มาจาก เชฟโฌ เชฟชาวญี่ปุ่นแท้ ๆ เลยทีเดียว รับรองว่า ถ้าทำขาย รสชาติอร่อย ไม่แพ้ร้านอาหารญี่ปุ่นชื่อดังแน่นอน"
          />
          <FoodList
          img="/66114641049-midterm/02.webp"
          name="ข้าวหน้าเนื้อดงบุริ"
          desc="ข้าวหน้าเนื้อ สไตล์ เมนูอาหารญี่ปุ่น ของ Youtuber ช่อง Chef Bas Fast Food ถอดแบบมาจากข้าวหน้าเนื้อญี่ปุ่นแท้ ๆ เลยก็ว่าได้ โดยเฉพาะในส่วนของซอสผัด ที่ใช้น้ำซุปดาชิ มิริน และ ซอสโชยุ เป็นส่วนผสม ซึ่งถ้าหากใครอยากทำให้เหมือนต้นฉบับ ทำตามสูตรนี้ได้เลย รับรองว่า ไม่ผิดหวัง"
          />
          <FoodList
          img="/66114641049-midterm/03.webp"
          name="ซูชิหน้าปลาแซลม่อน"
          desc="ซูชิหน้าปลาดิบ เมนูอาหารญี่ปุ่น ยอดฮิต ที่ถือเป็นอาหารประจำชาติอีกหนึ่งเมนู  โดยเฉพาะ ซูชิหน้าปลาแซลม่อน ซึ่งเป็นซูชิหน้าปลาดิบที่คนไทยชอบรับประทานมาก ๆ วิธีการทำก็ไม่ยาก เพียงแค่หุงข้าว และ ปรุงข้าวญี่ปุ่น ให้พร้อมปั้นเป็นข้าวซูชิ แล่เนื้อปลาแซลม่อนไว้ด้านบน เพียงเท่านี้ ก็พร้อมคีบเข้าปาก ทานได้แล้ว"
          />
      </div>
      <Footer />
      <Container />
  
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/66114641049-midterm">
      <Container className="bg-light p-2 my-3 bg-light">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/main' element={< Index />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;