import React from 'react';
import useBEMNaming from "../../common/useBEMNaming";
import {ReactComponent as GithubIcon} from "../../resources/icons/github.svg";
import {ReactComponent as RobotIcon} from "../../resources/icons/robot.svg";
import {ReactComponent as LinkIcon} from "../../resources/icons/link.svg";

const ModelDescription = (props) => {
    const {getBlock, getElement} = useBEMNaming("model-description")

    const ConditionalLink = ({icon, link, text}) => (
      link ?
        <div className={getElement("link-section-wrapper")}>
          <div className={getElement("link-section-icon")}>{icon}</div>
          <a className={getElement(`link-section-link ${!icon && "link-section-link-padded"}`)} href={link}>{text || link}</a>
        </div> :
        <></>
    );

    const getDescription = () => {
      if(props.model?.short_description) return props.model?.short_description;
      if(props.model?.description) return props.model?.description;
      return "";
     }

    const url = props.model?.url || {};
    const [firstLink, ...restOfLinks] = [url.link1, url.link2].filter(link => link);



    return <div className={getBlock()}>
    <h2 className={getElement("heading")}>More about this model</h2>
      <div className={getElement("divider")} />
      <div className={getElement("content-wrapper")}>
        <div className={getElement("content-wrapper-section")}>
          <p>{getDescription()}</p>
        </div>
        <div className={getElement("content-wrapper-links")}>
            <ConditionalLink link={url.citation} text={"Citation goes here"} icon={<RobotIcon />} />
            <ConditionalLink link={url.github} icon={<GithubIcon />} text={"github.com"} />
            <ConditionalLink link={firstLink} icon={<LinkIcon />} />
            {restOfLinks.map(link => <ConditionalLink link={link} key={link} />)}
        </div>
      </div>
    </div>
}

export default ModelDescription;
