const Spin = ({ size = '40px', color = '#000' }) => {
  const style = {
    width: size,
    height: size,
    borderTopColor: color,
  }

  return <span className="spin"></span>
}

export default Spin
