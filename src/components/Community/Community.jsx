import "./style/style.css";

export default function Community(props) {
  return (
    <div className="comminity-container">
      <div className="avatar" style={{ background: props.color }}></div>
      <div className="info">
        <div className="header">
          <h1 className="title">{props.name}</h1>
        </div>
        <div className="members-info">{props.members} подписчика</div>
      </div>

    </div>
  );
}
