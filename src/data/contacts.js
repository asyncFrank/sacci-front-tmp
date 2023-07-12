import { GrLocation } from "react-icons/gr";






const gridContactProfile = (props) => (
    <div className="flex items-center gap-2">
      <img
        className="rounded-full w-10 h-10"
        src={props.image_url}
        alt="employee"
      />
      <p>{props.name}</p>
    </div>
  );

const gridContactCity = (props) => (
    <div className="flex items-center justify-center gap-2">
      <GrLocation />
      <span>`${props.city}/${props.state}´</span>
    </div>
  );