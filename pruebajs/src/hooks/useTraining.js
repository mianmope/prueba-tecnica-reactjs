import { useContext } from "react";
import TrainingContext from "../context/TrainingProvider";

const useTraining = () => {
    return useContext(TrainingContext);
};

export default useTraining;
