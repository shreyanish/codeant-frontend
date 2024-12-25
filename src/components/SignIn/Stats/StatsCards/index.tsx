import Image from "next/image";

import statsData from '../../../../data/stats'

import "./styles.scss";
import codeantlogo from "../../../../../public/codeantlogo.svg";
import piechart from '../../../../../public/piechart.svg'
import uparrow from '../../../../../public/uparrow.svg'

const StatsCards = () => {
  return (
    <div className="statscards-parent">
      <div className="statscard-one">
        <div className="statsone-header">
          <Image src={codeantlogo} alt="" width={28} height={31}></Image>
          <p>AI to Detect & Autofix Bad Code</p>
        </div>
        <div className="statsone-container">
          <div className="statsone-stats">
            {statsData.main.map((stat) => (
              <div className="statsone-stat" key={stat.key}>
                <p className="stat-count">{stat.count}</p>
                <p className="stat-title">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="statscard-two">
        <div className="statstwo-header">
            <Image
                src={piechart}
                alt=""
                width={56}
                height={56}
            ></Image>
            <div className="statstwo-growth">
                <div className="growth-container">
                    <Image
                      src={uparrow}
                      alt=""
                      width={12}
                      height={12}
                    ></Image>
                    <p>{statsData.issue[0].growthpercent}%</p>
                </div>
                <p>This Week</p>
            </div>
        </div>
        <div className="statstwo-issue">
                <p className="issue-title">Issues Fixed</p>
                <p className="issue-count">{statsData.issue[0].issuesfixed}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;