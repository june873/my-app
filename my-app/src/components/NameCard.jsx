function NameCard(props) {
    return (
    <>
        <b>이름: {props.name}</b>
        <p>나이: {props.age}세</p>
    </>
    )
}

export default NameCard;