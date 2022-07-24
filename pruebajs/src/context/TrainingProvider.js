import React from "react";
import { useState, useEffect, createContext } from "react";

const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [training, setTraining] = useState([]);
    const [instructor, setInstructors] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const [videosCompletados, setVideosCompletados] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(
                "https://bestcycling-public.s3.eu-west-1.amazonaws.com/api-test/db.json"
            );
            const data = await response.json();

            setProfile(data.profile);
            setTraining(data.training_classes);
            setInstructors(data.instructors);
        }
        getData();
    }, []);

    return (
        <TrainingContext.Provider
            value={{
                profile,
                setProfile,
                training,
                setTraining,
                instructor,
                setInstructors,
                playlist,
                setPlaylist,
                videosCompletados,
                setVideosCompletados
            }}
        >
            {children}
        </TrainingContext.Provider>
    );
};

export default TrainingContext;
