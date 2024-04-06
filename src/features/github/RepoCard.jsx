import React from "react";
import github_icon from "../../assets/icons/github_icon.svg";
import link_icon from "../../assets/icons/link_icon.svg";
const RepoCard = ({ name, desc, url, homepage }) => {
  const customizeName = name.split("-").at(-1);
  return (
    <div className=" flex  max-w-xs flex-col justify-between space-y-5 rounded-lg  bg-articleBg p-4">
      <h3 className=" text-xl font-semibold text-accentColor">
        {customizeName}
      </h3>
      <p className="text-lg font-medium text-textColor">{desc}</p>
      <div className="flex items-center justify-start">
        <div className="flex gap-x-3">
          <a href={url} target="_blank" rel="noreferrer">
            <img height={30} width={30} src={github_icon} alt="" />
          </a>
          <a href={homepage} target="_blank" rel="noreferrer">
            <img height={30} width={30} src={link_icon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
