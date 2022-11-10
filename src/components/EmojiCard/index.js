import './index.css'

const EmojiCard = props => {
  const {emoji, onSelectEmoji} = props
  const {emojiName, emojiUrl, id} = emoji

  const onClickEmoji = () => {
    onSelectEmoji(id)
  }

  return (
    <li className="emoji-list-item">
      <button onClick={onClickEmoji} className="emoji-button" type="button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
