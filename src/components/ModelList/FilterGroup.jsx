import React from "react";
import Task from "../../helpers/Task";
import Framework from "../../helpers/Framework";
import {ReactComponent as MicroChip} from "../../resources/icons/microchip-solid.svg";

export default function FilterGroup(props) {
    const activeTag = "active";
    const inactiveTag = "inactive";
    let options = props.filterGroup.options;
    let lowerCaseGroupName = props.filterGroup.header.toLowerCase();

    const onClick = (name) => {
        let filterGroupName = props.filterGroup.header;
        props.toggleFilter(filterGroupName, name);
    };

    const getIconForButton = (option) => {
        if (lowerCaseGroupName === "tasks") {
            let task = Task.getStaticTask(option.name);
            return <task.Icon className={"filter-group__button-icon"}/>;
        }
        if (lowerCaseGroupName === "frameworks") {
            let framework = Framework.getStaticFramework(option.name);
            return <framework.Icon className={"filter-group__button-icon"}/>;
        }
        if (lowerCaseGroupName === "machines") {
            return <MicroChip className={"filter-group__button-icon filter-group__button-icon-machine"}/>;
        }

        return null;
    };

    const getButtonsForOptions = () => {
        return options.map((option, i) => {
            let classNameAddon = option.isActive ? activeTag : inactiveTag;
            let className = `filter-group__button filter-group__button-${lowerCaseGroupName}-${classNameAddon}`;
            return (
                <button key={i} className={className} data-group-name={lowerCaseGroupName}
                        onClick={() => onClick(option.name)}>
                    {getIconForButton(option)} {option.label}
                </button>
            );
        });
    }

    return (
        <div className="filter-group">
            <p className="filter-group__header">{props.filterGroup.header}</p>
            <p className="filter-group__description">{props.filterGroup.description}</p>
            {getButtonsForOptions()}
        </div>
    );
}
