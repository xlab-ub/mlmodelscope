import React from "react";
import {LinkItem} from "./LinkItem";
import {LinkSection} from "./LinkSection";

export function HeaderMenu(props) {

  if(props.testMenus)
    return (
    <>
      <LinkSection link={"/test"} display={"Menu Item 1"} {...props}>
        <LinkItem link={"/test"} display={"Submenu Item 1"} isSubMenu {...props} />
        <LinkItem link={"/test"} display={"Submenu Item 2"} isSubMenu {...props} />
        <LinkItem link={"/test"} display={"Submenu Item 3"} isSubMenu {...props} />
        <LinkItem link={"/test"} display={"Submenu Item 4"} isSubMenu {...props} />
      </LinkSection>
      <LinkItem link={"/test"} display={"Menu Item 2"} {...props}/>
      <LinkSection link={"/test"} display={"Menu Item 3"} {...props}>
        <LinkItem link={"/test"} display={"Submenu Item 1"} isSubMenu {...props} />
        <LinkItem link={"/test"} display={"Submenu Item 2"} isSubMenu {...props} />
        <LinkItem link={"/test"} display={"Submenu Item 3"} isSubMenu {...props} />
        <LinkItem link={"/test"} display={"Submenu Item 4"} isSubMenu {...props} />
      </LinkSection>
    </>);


  return (
    <>
      <LinkItem
        link={"/models"}
        display={"Browse model library"}
        {...props}
      />
    </>);
}
