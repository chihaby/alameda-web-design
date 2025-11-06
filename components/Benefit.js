import styles from "../styles/Benefits.module.css";
import Image from "next/image";
import ui from "../public/img/svg/ui.svg";
import dev from "../public/img/svg/webdev.svg";
import api from "../public/img/svg/api.svg";
import axe from "../public/img/svg/axe.svg";
import logo from "../public/img/svg/logo.svg";
import copy from "../public/img/svg/copy.svg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Benefit = () => {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div className={styles.container}>
        <h2 className={styles.title}>What We Do</h2>
        <br />
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={ui}
                alt="performance"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Design UI/UX
            </div>
            <br />
            <div className={styles.description}>
              Clean and simple layout designs for maximum user interaction and
              information architercture
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={dev}
                alt="web development"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Development
            </div>
            <br />
            <div className={styles.description}>
              Whatever feature you have in mind, we can design and build it from
              start to finish.
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={api}
                alt="search engine optimization"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              API intergration
            </div>
            <br />
            <div className={styles.description}>
              From payments to CRMs, we integrate your tools so everything works
              together and scales with your business
            </div>
          </Col>
        </Row>
        <Row style={{ padding: "16px" }}>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={axe}
                alt="accessibility"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Accessibility
            </div>
            <br />
            <div className={styles.description}>
              Your website will meet current accessibility laws, making it easy
              for everyone to access and engage with your content
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={copy}
                alt="writing for the web"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Copy
            </div>
            <br />
            <div className={styles.description}>
              We write web copy that communicates clearly, builds connection,
              and drives results.{" "}
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={logo}
                alt="logo design"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Logo
            </div>
            <br />
            <div className={styles.description}>
              A logo that represents your brand and leaves a lasting impression
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Benefit;
