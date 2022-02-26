import './index.css'

const StoryItem = Props => {
  const {storyDetails} = Props
  const {storyUrl, userName} = storyDetails

  return (
    <div className="story-container">
      <img src={storyUrl} alt="user story" className="story-logo" />
      <p className="user-name">{userName}</p>
    </div>
  )
}

export default StoryItem
