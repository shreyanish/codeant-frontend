"use client";

import SecondaryButton from "@/components/Buttons/Secondary";
import PrimaryButton from "@/components/Buttons/Primary";
import "./styles.scss";

import plusicon from "../../../../public/plusicon.svg";
import refreshicon from "../../../../public/refreshicon.svg";
import searchicon from "../../../../public/searchicon.svg";

const RepositoryHeader = () => {
  return (
    <div className="repoheader-parent">
      <div className="repoheader-titlesection">
        <div className="repoheader-details">
          <div className="repoheader-title">Repositories</div>
          <div className="repoheader-count">33 total repositories</div>
        </div>
        <div className="repoheader-actions">
          <SecondaryButton
            imageSource={refreshicon}
            text="Refresh All"
            onClick={() => {}}
          />
          <PrimaryButton
            imageSource={plusicon}
            text="Add Repository"
            onClick={() => {}}
            size="sm"
          />
        </div>
      </div>
      <div className="repoheader-search"> {/*className target style*/}
        <SecondaryButton
          imageSource={searchicon}
          text="Search Repositories"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default RepositoryHeader;
