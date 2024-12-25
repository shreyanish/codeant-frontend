import Image from 'next/image';

import './styles.scss'

interface SecondaryButtonProps {
    imageSource:string, 
    text:string,
    onClick: () => void,
}

const SecondaryButton = (props: SecondaryButtonProps) => {
    return (
        <div className="secondary-parent" onClick={props.onClick}>
            <Image
              src={props.imageSource}
              alt=''
              width={18}
              height={16}
            ></Image>
            <p className="secondary-text">{props.text}</p>
        </div>
    )
}

export default SecondaryButton;