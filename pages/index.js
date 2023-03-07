import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Valorant Wiki</title>
        <link rel="icon" href="https://img.icons8.com/color/512/valorant.png" />
      </Head>
      <main className={styles.bg}>
        <div className="container">
          <div className="d-flex flex-wrap">
            <div
              className="card card-body text-white bg-dark d-flex flex-column justify-content-between align-items-center"
              style={{ margin: "1rem", flex: 1, maxheight: "35rem" }}
            >
              <div className="d-flex justify-content-center align-items-center flex-grow-1">
                <img
                  src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
                  className="card-img-top"
                  style={{ objectFit: "contain", height: "100%" }}
                />
              </div>
              <div className="text-center">
                <Link href="/agentspage">
                  <button
                    className="btn btn-dark"
                    style={{ fontWeight: "bold" }}
                  >
                    Agents
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="card card-body text-white bg-dark d-flex flex-column justify-content-between align-items-center"
              style={{ margin: "1rem", flex: 1, maxheight: "35rem" }}
            >
              <div className="d-flex justify-content-center align-items-center flex-grow-1">
                <img
                  src="https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png"
                  className="card-img-top"
                  style={{ objectFit: "contain", height: "100%" }}
                />
              </div>
              <div className="text-center">
                <Link href="/gunspage">
                  <button
                    className="btn btn-dark"
                    style={{ fontWeight: "bold" }}
                  >
                    Guns
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
