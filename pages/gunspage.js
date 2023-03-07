import GunImage from "@/Components/gunImage/gunImage";
import GunInfo from "@/Components/gunInfo/gunInfo";
import styles from "@/styles/Home.module.css";

export default function GunsPage(props) {
  const { guns } = props;
  console.log(guns);
  return (
    <>
      <main className={styles.bg}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center">
            {guns.map((gun) => (
              <div key={gun.uuid} className="card text-white bg-dark m-3">
                <div className="card-body">
                  <GunImage img={gun.displayIcon}></GunImage>
                  <GunInfo gun={gun}></GunInfo>
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
