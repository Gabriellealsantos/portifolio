import './styles.css'

type Props = {
    text: string;
}

export default function ButtonBlack({ text }: Props) {

    return (
        <div className="pf-btn pf-btn-black">
            {text}
        </div>
    );
}