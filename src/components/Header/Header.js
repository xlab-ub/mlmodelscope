import React from 'react';
import "./Header.scss"
import {HeaderMenu} from "./HeaderMenu";
import {useHeaderControl} from "./useHeaderControl";
import {LinkItem} from "./LinkItem";
import {ReactComponent as ChevDown} from "../../resources/icons/chevron-down-white.svg";
import Task from "../../helpers/Task";


export default function Header(props) {
  const {
    showMenu,
    toggleMenu,
    getElement,
    getHeaderClassNames,
    toggleComparison,
    showModelComparison
  } = useHeaderControl(props);

  const tasks = Task.getStaticTasks();

  return (
    <>
      {!props.splash &&
        <div className={getElement("placeholder")}>

        </div>
      }
      <div className={getHeaderClassNames()}>
        <div className={getElement("row")}>

          <div className={getElement("logo-container")}>
            <span className={getElement("beta")}>Beta</span>
            <a className={getElement("logotype")} href="/">
              <span className={getElement("logotype__ml")}>ML</span>
              <span className={getElement("logotype__modelscope")}>Modelscope</span>
            </a>
          </div>
          <div hidden={showMenu} aria-hidden={showMenu} className={getElement("menu")}>
            <LinkItem {...props} getElement={getElement} display={"Browse model library"} link={"/models"}/>
            <div className={getElement("compare-models")}>

              <button onClick={toggleComparison} className={getElement("compare-models-btn")}>
                Compare models <ChevDown className={getElement("compare-models-btn-icon")}/>
              </button>
              <div hidden={!showModelComparison} className={getElement("compare-models-container")}>
                <p className={getElement("compare-models-title")}>Choose task to use for your comparison</p>

                {tasks.map(task => <button
                  className={getElement("compare-models-task")}>
                  <task.Icon className={getElement("compare-models-task-icon")}/>
                  {task.name} </button>)}

              </div>
            </div>

          </div>
          <button onClick={toggleMenu}
                  className={getElement(`responsive-menu-icon ${showMenu && "responsive-menu-icon-open"}`)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div aria-hidden={!showMenu} className={getElement(`responsive-menu ${showMenu && "responsive-menu-open"}`)}>
          <HeaderMenu getElement={getElement} isResponsiveMenu testMenus={props.testMenus}/>
        </div>
      </div>
    </>

  );
}

Header.defaultProps = {
  splash: false,
}
