import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <nav class="navbar container-fluid navbar-dark bg-dark">
        <div className="container" style={{ height: "3rem" }}>
          <Link href="/">
          <button class="navbar-brand btn mb-0 h1" style={{fontWeight:"bold"}}>Valorant Wiki</button>
          </Link>
          <div>
            <Link href="/agentspage">
              <button className="navbar-brand btn mb-0 h1" style={{ fontWeight: "bold" }}>
                Agents
              </button>
            </Link>
            <Link href="/gunspage">
              <button className="navbar-brand btn mb-0 h1" style={{ fontWeight: "bold" }}>
                Guns
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
