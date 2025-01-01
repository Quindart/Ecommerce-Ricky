const Radio = (props) => {
    const { id, name, value, onChange, children } = props;
    return (
        <>
            <input id={id} type="radio" name={name} value={value} onChange={onChange} />
            {children}
        </>
    )
}
export default Radio;