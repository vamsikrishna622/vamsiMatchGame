import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeBtnElement = isActive ? 'active-btn' : ''

  const onClickTabId = () => {
    clickTabId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-button ${activeBtnElement}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
