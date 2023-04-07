const GifItem = ({ id, url, title, copyToClipboard, showToast, setShowToast }) => {
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

export default GifItem;
