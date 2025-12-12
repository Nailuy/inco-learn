interface ProgressBarProps {
    progress: number;
    height?: number;
}

function ProgressBar({ progress, height = 8 }: ProgressBarProps) {
    return (
        <div className="progress-bar" style={{ height }}>
            <div
                className="progress-fill"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
        </div>
    );
}

export default ProgressBar;
