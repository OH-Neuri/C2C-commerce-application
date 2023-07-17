import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const H1 = styled.h1`
  color:blue;
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <H1>안녕하세요</H1>
      </main>
    </div>
  );
};

export default Home;
