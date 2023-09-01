import {useState} from "react";
import Task from "../../../../../helpers/Task";

export default function useTextInputControl(props) {
    const [text, setText] = useState(props.values[0]);
    const task = Task.getStaticTask(props.task);

    const textChanged = async (event) => {
        if (event.persist) {
            event.persist();
        }

        setText(event.target.value);

        if (typeof(props.inputSelected) === "function") {
            props.inputSelected(text, 0);
        }
    }

    return {
        task,
        text,
        textChanged
    }
}