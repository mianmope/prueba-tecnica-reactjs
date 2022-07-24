import React, { useState, useEffect } from "react";
import "../estilos/Reproductor.css";
import { useNavigate } from "react-router-dom";
import testVideo from "../assets/cuentaAtras.mp4";

import * as utils from "../utils/metodos";

import useTraining from "../hooks/useTraining";

function Reproductor() {
    const [index, setIndex] = useState(0);
    const [video, setVideo] = useState(null);

    const { instructor, playlist, setPlaylist } = useTraining();

    const navigate = useNavigate();

    useEffect(() => {
        if (playlist.length > 0) {
            setVideo(playlist[index]);
            setIndex(index + 1);
        } else {
            navigate("/");
        }
    }, []);

    const handleEnded = () => {
        if (index < playlist.length) {
            setVideo(playlist[index]);
            setIndex(index + 1);

            const testVideo = document.getElementById("video");
            testVideo.play();
        } else {
            setPlaylist([]);
            navigate(-1);
        }
    };

    const goBack = () => {
        document.getElementById("video").setAttribute("playing", false);
        navigate(-1);
    };

    if (!video) {
        return null;
    }

    return (
        <>
            <div className="d-flex align-items-center">
                <div className="m-5">
                    <button className="btn-negro btn-circle btn-xl" onClick={goBack}>
                        {"<<"}
                    </button>
                </div>
                <div className="tituloClase ">
                    <h2>{video.name}</h2>
                    <h5>{utils.getInstructorById(instructor, video.instructor_id).name}</h5>
                </div>
            </div>
            <div className="reproductor">
                <video
                    id="video"
                    src={testVideo}
                    autoPlay
                    width="100%"
                    height="auto"
                    onEnded={handleEnded}
                />
            </div>
        </>
    );
}
export default Reproductor;
