import './DownloadBtn.css'

export default function DownloadBtn({link}) {
    return (
        <div className="download">
        <a href={link} download>
            <i className="fas fa-download"></i> Download Resume
        </a>
        </div>
    );
    }
