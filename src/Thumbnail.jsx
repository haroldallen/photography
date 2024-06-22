import moment from "moment";
import { useEffect } from "react";

export default function Thumbnail({ type, date, title, thumbnail, length, camera, lens, href, setViewing }) {
    if (type === "video") return <iframe className="thumbnail video" src={href}>

    </iframe>;

    return <button className="thumbnail album" style={{backgroundImage: `url("/photography/${date}/${thumbnail}")`}} onClick={()=>{ setViewing({type, date, title, length, camera, lens}) }}>
        <div className="jsb">
            <p>{title} <span>/</span> {moment(date).format("DD/MM/YY")}</p>
            <p>+{length-1}</p>
        </div>
    </button>;
}