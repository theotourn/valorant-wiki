import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/navbar";

export default function GunsPage(props) {
  const { guns } = props;
  console.log(guns);
  return (
    <>
      <main className={styles.bg}>
        <Navbar />
        <div className="container">
          <div className="d-flex flex-wrap">
            {guns.map((guns) => (
              <div
                key={guns.uuid}
                className="card card-body text-white bg-dark"
                style={{ width: "20rem", margin: "1rem" }}
              >
                <div className="container">
                  <img
                    className="card-img-top"
                    src={guns.displayIcon}
                    alt={guns.displayName}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{guns.displayName}</h5>
                  <div className="container">
                    <div className="d-flex">
                      <li
                        className="card-text"
                        style={{ marginRight: "1rem", fontWeight: "bold" }}
                      >
                        Fire Rate :{" "}
                      </li>
                      <p className="card-text">{guns.weaponStats?.fireRate}</p>
                    </div>
                    <div className="d-flex">
                      <li
                        className="card-text"
                        style={{ marginRight: "1rem", fontWeight: "bold" }}
                      >
                        First Bullet Accuracy :{" "}
                      </li>
                      <p className="card-text">
                        {guns.weaponStats?.firstBulletAccuracy}
                      </p>
                    </div>
                    <div className="d-flex">
                      <li
                        className="card-text"
                        style={{ marginRight: "1rem", fontWeight: "bold" }}
                      >
                        Magazine Size :{" "}
                      </li>
                      <p className="card-text">
                        {guns.weaponStats?.magazineSize}
                      </p>
                    </div>
                    <div className="d-flex">
                      <li
                        className="card-text"
                        style={{ marginRight: "1rem", fontWeight: "bold" }}
                      >
                        Run Speed Multiplier :{" "}
                      </li>
                      <p className="card-text">
                        {guns.weaponStats?.runSpeedMultiplier}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://valorant-api.com/v1/weapons");
  const data = await res.json();
  return { props: { guns: data.data } };
}
