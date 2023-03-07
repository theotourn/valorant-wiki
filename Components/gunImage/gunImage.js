import styles from "./gunImage.module.scss";

export default function GunImage(props) {
  return (
    <div
      className={styles.gunimage}
      style={{ backgroundImage: "url(" + props.img + ")" }}
    ></div>
  );
}
