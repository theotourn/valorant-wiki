import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/navbar";
import Link from "next/link";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Valorant Agents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.bg}>
        <Navbar />
        <div className="container">
          <div className="d-flex flex-wrap">
            <div
              className="card card-body text-white bg-dark"
              style={{ margin: "1rem" }}
            >
              <img
                src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
                width="400rem"
                height="400rem"
                className="card-img-top"
              />
              <Link href="/agentspage">
                <div className="text-center">
                  <button
                    className="btn btn-dark"
                    style={{ fontWeight: "bold" }}
                  >
                    Agents
                  </button>
                </div>
              </Link>
            </div>
            <div
              className="card card-body text-white bg-dark"
              style={{ margin: "1rem" }}
            >
              <img
                src="https://vgraphs.com/images/weapons/skins/valorant-weapon-skin-standard-vandal.png"
                width="400rem"
                height="400rem"
                className="card-img-top"
              />
              <Link href="/gunspage">
              <div className="text-center">
                <button className="btn btn-dark" style={{ fontWeight: "bold" }}>
                  Guns
                </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
