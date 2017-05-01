import React, { Component } from 'react';
class About extends Component {
  render() {
      const styles = {
          container: {
              height: "100%",
              color: "#f2f2f2",
              textAlign: "center",
              left: "50%",
              paddingLeft: "calc(1500px - 50vw)"
          },
          h: {
              fontWeight: 200,
              textAlign: "center",
          },
          p: {
              fontWeight: 300
          },
          align: {
              width: "90%",
              maxWidth: "600px",
              margin: "0 auto"
          }
      }
      return (
          <div style={styles.container}>
              <div style={styles.align}>
                <h1 style={styles.h}>I'm charlie</h1>
                <p style={styles.p}> I'm a software developer / designer based in Brisbane, Australia.<br />I love to make cool software that people enjoy using </p>
                <h1 style={styles.h}>I am avaliable to hire</h1>
              </div>
        </div>
      )
  }
}
export default About;