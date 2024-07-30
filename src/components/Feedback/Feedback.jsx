import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
    return (
        <div>
            <ul className={css.feedbackList}>
                <li className={css.listItem}>Good:{feedback.good}</li>
                <li className={css.listItem}>Neutral:{feedback.neutral}</li>
                <li className={css.listItem}>Bad:{feedback.bad}</li>
                <li className={css.listItem}>Total:{totalFeedback}</li>
                <li className={css.listItem}>Positive:{positiveFeedback}%</li>
            </ul>
        </div>
    );
};
export default Feedback;