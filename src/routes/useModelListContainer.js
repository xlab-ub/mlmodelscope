import {useEffect, useState} from "react";
import GetApiHelper from "../helpers/api";

let modelSubscription = null;
let frameworkSubscription = null;

const api = GetApiHelper();

export default function useModelListContainer(props) {
    const [models, setModels] = useState([]);
    const [frameworkOptions, setFrameworkOptions] = useState([]);

    const getModels = () => {
        modelSubscription = api.Models.subscribe({
            next: (apiModels) => {
                setModels(apiModels)
            }
        });
        api.getModels();
    }

    const getFrameworks = () => {
        frameworkSubscription = api.Frameworks.subscribe({
            next: (frameworks) => {
                let frameworkOptionsFromApi = frameworks.map(framework => {
                    return {
                        id: framework.id,
                        name: framework.name,
                        label: framework.name,
                        isActive: false
                    }
                });

                setFrameworkOptions(frameworkOptionsFromApi);
            }
        });
        api.getFrameworks();
    }

    useEffect(() => {
        getModels();
        getFrameworks();

        return () => {
            modelSubscription.unsubscribe();
            frameworkSubscription.unsubscribe();
        };
    }, []);

    return {
        models,
        frameworkOptions
    }
}