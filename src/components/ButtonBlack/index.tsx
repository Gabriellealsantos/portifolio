import './styles.css'

type Props = {
    text: string;
}

export default function ButtonBlack({ text }: Props) {

    return (
        <button className="animated-button">
            <span>{text}</span>
            <span></span>
        </button>
    );
}