export default function GunInfo(props) {
  return (
    <div>
      <h5 className="card-title text-center mt-1">{props.gun.displayName}</h5>
      <div className="list-group list-group-flush">
        <div className="d-flex list-group-item bg-dark text-light justify-content-between">
          <spam className="fw-bold">Fire Rate</spam>
          <spam>{props.gun.weaponStats?.fireRate}</spam>
        </div>
        <div className="d-flex list-group-item bg-dark text-light justify-content-between">
          <spam className="fw-bold">First Bullet Accuracy</spam>
          <spam>{props.gun.weaponStats?.firstBulletAccuracy}</spam>
        </div>
        <div className="d-flex list-group-item bg-dark text-light justify-content-between">
          <spam className="fw-bold">Magazine Size</spam>
          <spam>{props.gun.weaponStats?.magazineSize}</spam>
        </div>
        <div className="d-flex list-group-item bg-dark text-light justify-content-between">
          <spam className="fw-bold">Run Speed Multiplier</spam>
          <spam>{props.gun.weaponStats?.runSpeedMultiplier}</spam>
        </div>
      </div>
    </div>
  );
}
