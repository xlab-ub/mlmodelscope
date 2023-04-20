import {image_classification, instance_segmentation, object_detection} from "../../helpers/TaskIDs";

export const defaultModels = [
    createModel("ChickenModel", "chicken", "MXNet", image_classification, ["amd64"]),
    createModel("TigerSharkModel", "this model says everything is a tiger shark", "PyTorch", image_classification, ["amd64"]),
    createModel("BoxModel", "this model puts boxes around stuff", "TensorFlow", object_detection, ["amd64"]),
    createModel("OnyxModel", "this model uses onnxruntime", "Onnxruntime", image_classification, ["ILLIAC", "ENIAC"]),
    createModel("ClonyxModel", "a clone of onnxruntime tigershark", "Onnxruntime", image_classification, ["amd64"]),
    createModel("InstanceModel", "this model segments an instance", "Onnxruntime", instance_segmentation, ["amd64"]),
    createModel("Clonyx2", "tigershark tigershark", "Onnxruntime", instance_segmentation, ["amd64"]),
];
export const defaultFrameworks = [
    {name: "MXNet", label: "MXNet", isActive: false},
    {name: "Onnxruntime", label: "Onnxruntime", isActive: false},
    {name: "PyTorch", label: "PyTorch", isActive: false},
    {name: "TensorFlow", label: "TensorFlow", isActive: false},
];
export const defaultMachines = [
    {name: "amd64", label: "Amd64", isActive: false},
    {name: "ILLIAC", label: "ILLIAC", isActive: false},
    {name: "ENIAC", label: "ENIAC", isActive: false},
]

export function createModel(name, description, framework, task, machines) {
    let architectures = machines.map(machine => ({name: machine}));
    return {
        name: name,
        description: description,
        framework: {
            name: framework,
            architectures: architectures,
        },
        output: {type: task}
    };
}