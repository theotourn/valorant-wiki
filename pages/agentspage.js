import styles from "@/styles/Home.module.css";

export default function AgentsPage(props) {
  const { agents } = props;
  console.log(agents);
  return (
    <>
      <main className={styles.bg}>
        <div className="container">
          <div className="d-flex flex-wrap">
            {agents.map((agent) => (
              <div
                key={agent.uuid}
                className="card  card-body text-white bg-dark"
                style={{ width: "18rem", margin: "1rem" }}
              >
                <img
                  className="card-img-top"
                  src={agent.fullPortrait}
                  alt={agent.displayName}
                />
                <div className="card-body">
                  <h5 className="card-title">{agent.displayName}</h5>
                  <p className="card-text">{agent.description}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={agent.role.displayIcon}
                      alt={agent.role.displayName}
                      width="31ch"
                    />
                    <div style={{ paddingLeft: "10px" }}>
                      <h5 className="card-title">{agent.role.displayName}</h5>
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
  const res = await fetch(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );
  const data = await res.json();
  return { props: { agents: data.data } };
}
