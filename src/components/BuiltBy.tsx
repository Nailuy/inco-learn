import { useState } from 'react';
import nailuyAvatar from '../assets/nailuy.png';
import keshaAvatar from '../assets/kesha.jpg';
import pushkinAvatar from '../assets/pushkin.jpg';
import dr1mmerrAvatar from '../assets/dr1mmerr.jpg';

const team = [
    { name: 'nailuy', avatar: nailuyAvatar, link: 'https://x.com/yulianvakh' },
    { name: 'kesha', avatar: keshaAvatar, link: null },
    { name: 'Pushkin', avatar: pushkinAvatar, link: null },
    { name: 'dr1mmerr', avatar: dr1mmerrAvatar, link: null },
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
