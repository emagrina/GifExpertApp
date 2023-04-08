import PropTypes from "prop-types";

export const GifItem = ({ id, url, title, copyToClipboard, setShowToast }) => {
    return (
        <img
            key={id}
            src={url}
            className="gif gif__image"
            alt={`gif :${title}`}
            onClick={() => {
                copyToClipboard(url);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
            }}
        />
    );
};

GifItem.prototype = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}