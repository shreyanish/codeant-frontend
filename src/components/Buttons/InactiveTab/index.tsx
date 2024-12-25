import Image from 'next/image'

import './styles.scss'

interface InactiveButtonProps {
    imageSource:string, 
    text:string,
    onClick:() => void,
}

const InactiveTab = (props: InactiveButtonProps) => {
    return (
        <div className="inactive-parent" onClick={props.onClick}>
            <Image
              src={props.imageSource}
              alt=''
              width={20}
              height={18}
            ></Image>
            <p className='inactive-text'>{props.text}</p>
        </div>
    )
}

export default InactiveTab;