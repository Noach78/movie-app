export default function RatingBadge({ rating }) {
    let badgeClass = rating >= 8 ? 'badge badge--good' : rating < 5 ? 'badge badge--bad' : 'badge'
    return (
        <span className={badgeClass}>{rating}</span>
    )
}