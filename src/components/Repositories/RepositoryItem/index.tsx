import Image from "next/image";

import "./styles.scss";
import dbicon from '../../../../public/databaseicon.svg'

interface RepositoryItemProps {
  title: string;
  visibility: string;
  language: string;
  size: number;
  updatedBefore: number;
}

const RepositoryItem = ({
  title,
  visibility,
  language,
  size,
  updatedBefore,
}: RepositoryItemProps) => {
  return (
    <div className="repoitem-parent">
      <div className="repoitem-main">
        <div className="repoitem-title-section">
          <p className="repoitem-title">{title}</p>
          <div className="repoitem-visibility">{visibility}</div>
        </div>

        <div className="repoitem-details">
          <div className="repoitem-language">
            <p>{language}</p>
            <div className="language-dot"></div>
          </div>
          <div className="repoitem-data">
            <Image
              src={dbicon}
              alt=""
              width={12}
              height={12}
            ></Image>
            <p>{size} KB</p>
          </div>
          <p>
            Updated {updatedBefore} day{updatedBefore > 1 ? "s" : ""} ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepositoryItem;
