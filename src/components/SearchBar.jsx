import Icon from './Icon.jsx'

export default function SearchBar({ value, onChange }) {
  return (
    <label className="search-field">
      <Icon name="search" size={17} />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search characters..."
        aria-label="Search Disney characters by name"
      />
      {value && (
        <button type="button" className="clear-search" onClick={() => onChange('')} aria-label="Clear search">
          <Icon name="close" size={14} />
        </button>
      )}
    </label>
  )
}
