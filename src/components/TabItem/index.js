import './index.css'

const TabItem = props => {
  const {tabDetails, onTabChange, activeClass} = props
  const {tabId, displayText} = tabDetails
  const onButtonClick = () => {
    onTabChange(tabId)
  }

  const activeClassName = activeClass ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={onButtonClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
