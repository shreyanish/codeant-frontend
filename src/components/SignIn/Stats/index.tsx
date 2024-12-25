import Image from "next/image";

import StatsCards from "./StatsCards";
import './styles.scss'
import codeantgray from '../../../../public/codeantlogo-gray.svg'

const Stats = () => {
    return (
        <div className="stats-parent">
            <StatsCards />
            <Image
              src={codeantgray}
              alt=""
              width={284}
              height={319}
              className="stats-bg"
            ></Image>
        </div>
    )
}

export default Stats;