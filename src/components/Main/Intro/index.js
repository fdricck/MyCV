import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import image from "../../../assets/img/avatar.jpg";

const Intro = () => {
    const [intro, setIntro] = useState({});
    useEffect(() => {
        const db = getDatabase();
        const introRef = ref(db, "intro");
      onValue(introRef, (snapshot) => {
        const data = snapshot.val();
        setIntro(data);
      });
    }, []);
  return (
    <div>
        <section className="cv-block block-intro border-bottom">
      <div className="container">
        <div className="avatar">
          <img className="img-fluid rounded-circle" src={`data:image/jpg;base64,${intro.img}`} />
        </div>
        <p>{intro.p}</p>
        <a href="#" className="btn btn-outline-primary">{intro.hr}</a>
      </div>
    </section>  
    </div>
  );
}
;
export default Intro;