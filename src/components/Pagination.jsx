import Icon from './Icon.jsx'

export default function Pagination({ page, totalPages, hasPrevious, hasNext, onPrevious, onNext }) {
  return (
    <div className="pagination">
      <span>PAGE <strong>{page.toString().padStart(2, '0')}</strong> <span className="pagination-muted">/ {Math.max(totalPages, 1).toString().padStart(2, '0')}</span></span>
      <div className="pagination-actions">
        <button type="button" className="page-button" disabled={!hasPrevious} onClick={onPrevious} aria-label="Previous page">
          <Icon name="back" size={16} /><span>Prev</span>
        </button>
        <button type="button" className="page-button next" disabled={!hasNext} onClick={onNext} aria-label="Next page">
          <span>Next</span><Icon name="arrow" size={16} />
        </button>
      </div>
    </div>
  )
}
