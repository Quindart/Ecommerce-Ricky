const Tab = (props) => {
  const {
    className,
    style,
    data,
    dataChildren,
    id,
    children,
    onChangeTab,
    currentTab,
    ...rest
  } = props

  const handleActive = (tabId) => {
    if (onChangeTab) {
      onChangeTab(tabId)
    }
  }

  return (
    <div style={style} className={className} {...rest}>
      <div className="tabs">
        <div className="tabs__menu">
          {data &&
            data.map((tab) => (
              <div
                key={tab.tab}
                className={`tabs__menu--item ${
                  currentTab === tab.tab ? 'active' : ''
                }`}
              >
                <span
                  onClick={() => handleActive(tab.tab)}
                  className="tabs__menu--item-link"
                >
                  {tab.tab}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Tab
