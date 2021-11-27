import React, { Component } from "react";
import Face from "../../img/faceimage2.jpg";
class About extends Component {
  render() {
    const styles = {
      container: {
        color: "#f2f2f2",
        textAlign: "center",
        left: "50%",
        paddingLeft: "calc(1500px - 50vw)",
        marginTop: "2rem",
      },
      h: {
        fontWeight: 100,
        textAlign: "center",
        fontSize: "2.2rem",
      },
      p: {
        fontWeight: 300,
        lineHeight: "2rem",
        fontSize: "1.2rem",
      },
      align: {
        width: "90%",
        maxWidth: "600px",
        margin: "0 auto",
      },
      face: {
        filter: "opacity(0.8)",
        width: "128px",
        borderRadius: "50%",
      },
    };
    return (
      <div style={styles.container}>
        <div style={styles.align}>
          <img src={Face} style={styles.face} alt="charlie groves" />
          <h1 style={styles.h}>Howdy</h1>
          <p style={styles.p}>
            I'm a software engineer, designer, and artist currently based in
            Brisbane, Australia.
            <br />
            I'm currently working at Tanda (aka Workforce.com), making teams
            around the world more efficient, empathetic, and most of all,
            successful
          </p>
          <h1 style={styles.h}>What can I do</h1>
          <p style={styles.p}>
            I'm an avid programmer with experience architecting and engineering
            products used by millions of people. I love react, functional
            programming, and solving complex problems using AI and cool
            algorithms <br />I also love to design, I combine my background in
            visual art and graphic design with user-centered problem sovling to
            make products that are intuitive and fun
          </p>
          <h1 style={styles.h}>Drop me a line</h1>
          <p style={styles.p}>
            Need some help with a project? Or just want to chat about stuff?
            Shoot me an email :){" "}
          </p>
          <p style={styles.p}>
            <a href="mailto:charltongroves@gmail.com">
              charltongroves@gmail.com
            </a>{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default About;
