const RadioGroup = (props) => {
    const { name, items, value, onChange, children } = props;

    return (
        <>
            <div className="radio-group" name="gender">
                {children}
            </div>
        </>
    )
}
export default RadioGroup;