import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Info = () => {
    const [info, setInfo] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const infoRef = ref(db, "info");
    onValue(infoRef, (snapshot) => {
      const data = snapshot.val();
      setInfo(data);
    });
  }, []);
  return (
    <div>
        <section className="cv-block info">
      <div className="container">
        <div className="work-experience group" id="portofolio">
          <h2 className="text-center">{info.pfolio}</h2>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>{info.text}</h3>
                <h4 className="organization">{info.t1}</h4>
              </div>
              <div className="col-md-6">
                <time className="period">{info.date1}</time>
              </div>
            </div>
            <p className="text-muted">{info.t2}</p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>{info.text1}</h3>
                <h4 className="organization">{info.t3}</h4>
              </div>
              <div className="col-md-6">
                <time className="period">{info.date2}</time>
              </div>
            </div>
            <p className="text-muted">{info.t4}</p>
          </div>
        </div>
        <div className="education group" id="education">
          <h2 className="text-center">{info.edu}</h2>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>{info.text2}</h3>
                <h4 className="organization">{info.t5}</h4>
              </div>
              <div className="col-md-6">
                <time className="period">{info.date3}</time>
              </div>
            </div>
            <p className="text-muted">{info.t6}</p>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>{info.text3}</h3>
                <h4 className="organization">{info.t7}</h4>
              </div>
              <div className="col-md-6">
                <time className="period">{info.date4}</time>
              </div>
            </div>
            <p className="text-muted">{info.t8}</p>
          </div>
        </div>
        <div className="group" id="skills">
          <div className="row">
            <div className="col-md-6">
              <div className="skills info-card">
                <h2>{info.skills}</h2>
                <h3>{info.s1}</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                  </div>
                </div>
                <h3>{info.s2}</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                  </div>
                </div>
                <h3>{info.s3}</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info info-card">
                <h2>{info.contact}</h2>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-android-calendar icon" />
                  </div>
                  <div className="col-9">
                    <span>{info.c1}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-person icon" />
                  </div>
                  <div className="col-9">
                    <span>{info.c2}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-ios-telephone icon" />
                  </div>
                  <div className="col-9">
                    <span>{info.c3}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-at icon" />
                  </div>
                  <div className="col-9">
                    <span>{info.c4}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hobbies group" id="hobbies">
          <h2 className="text-center">{info.hobbies}</h2>
          <p className="text-center text-muted">{info.h1}</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Info;