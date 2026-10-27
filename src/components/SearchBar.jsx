export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      placeholder="Rechercher un film..."
      aria-label="Rechercher un film"
      value={value}
      onChange={onChange}
    />
  );
}
