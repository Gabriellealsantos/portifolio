import './styles.css';

type CardProps = {
    children: React.ReactNode;
    className?: string;
    shadowDirection?: 'left' | 'right';
};

export const BaseCard = ({ children, className, shadowDirection = 'left' }: CardProps) => {
    const shadowStyle = shadowDirection === 'left'
        ? '-10px 0px 10px rgba(20, 17, 28, 1), 0px 10px 10px rgba(20, 17, 28, 1)'
        : '10px 10px 10px rgba(20, 17, 28, 1)';

    return (
        <div
            className={`card-base ${className}`}
            style={{ boxShadow: shadowStyle }}
        >
            {children}
        </div>
    );
};