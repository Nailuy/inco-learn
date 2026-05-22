import { useState } from 'react';
import nailuyAvatar from '../assets/nailuy.png';


const team = [
    { name: 'nailuy', avatar: nailuyAvatar, link: 'https://x.com/yulianvakh' },

];

function BuiltBy() {
    const [hoveredMember, setHoveredMember] = useState<string | null>(null);

    const handleClick = (link: string | null) => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="built-by">
            <span className="built-by-label">BUILT BY:</span>
            <div className="built-by-avatars">
                {team.map((member) => (
                    <div
                        key={member.name}
                        className={`avatar-item ${member.link ? 'clickable' : ''}`}
                        onMouseEnter={() => setHoveredMember(member.name)}
                        onMouseLeave={() => setHoveredMember(null)}
                        onClick={() => handleClick(member.link)}
                        style={{ cursor: member.link ? 'pointer' : 'default' }}
                    >
                        <img src={member.avatar} alt={member.name} className="avatar-img" />
                        {hoveredMember === member.name && (
                            <div className="avatar-tooltip">{member.name}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BuiltBy;
