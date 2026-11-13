import ResourceCard from './ResourceCard.jsx'

export default function CharacterGrid({ characters, className = '' }) {
  return (
    <div className={`character-grid${className ? ` ${className}` : ''}`}>
      {characters.map((character, index) => (
        <ResourceCard key={character._id} character={character} index={index} />
      ))}
    </div>
  )
}
