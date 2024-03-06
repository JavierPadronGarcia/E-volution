type Props = {
    title:string
    onClick: () => void;
};

const YellowButton: React.FC<Props> = ({title, onClick}) => {
    
    return (
        <>
            <button className="rounded-xl h-12  " onClick={onClick}>{title}</button>
        </>
    );
};

export default YellowButton;