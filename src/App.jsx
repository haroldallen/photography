import { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";
import axios from "axios";
import moment from "moment";

export default function App({ viewing, setViewing }) {
    const [ data, setData ] = useState([]);

    useEffect(()=>{ load() }, []);

    async function load() {
        let res = await axios.get("/photography/data.json", { responseType: 'json' });
        setData(res.data.sort((a, b) => new Date(b.date) - new Date(a.date)));
        console.log(res.data);
    }

    return <>
        { data && data.length > 0 ? <>
            { !viewing ? data.map((item, i) => <Thumbnail key={i} setViewing={setViewing} {...item} />) : <></> }
            { viewing ? <>
                <h1 className="title">{viewing.title}</h1>
                <p className="date">{moment(viewing.date).format("dddd, Do MMMM YYYY")}</p>
                <div className="list">
                    { [...Array(viewing.length).keys()].map((i) => <img key={i} className={"image "+(viewing.type)} src={`/photography/${viewing.date}/${i}.jpg`} />) }
                </div>
            </> : <></>}
        </> : "Loading..." }
    </>;
}