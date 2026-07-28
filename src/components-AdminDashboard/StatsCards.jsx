import statPlacements from "../assets/icons/stat-placements.png";
import statStudents from "../assets/icons/stat-students.png";
import statRecruiters from "../assets/icons/stat-recruiters.png";
import statCompanies from "../assets/icons/stat-companies.png";
import noteUpIcon from "../assets/icons/note-up.png";
import noteNeutralIcon from "../assets/icons/note-neutral.png";
import noteWarnIcon from "../assets/icons/note-warn.png";
import noteMutedIcon from "../assets/icons/note-muted.png";
import "./StatsCards.css";

const StatsCards = () => {
  const cards = [
    {
      label: "TOTAL PLACEMENTS",
      value: "4,120",
      note: "82% of Annual Goal",
      noteType: "up",
      noteIcon: noteUpIcon,
      icon: statPlacements,
    },
    {
      label: "ACTIVE STUDENTS",
      value: "12,482",
      note: "+12% vs last month",
      noteType: "neutral",
      noteIcon: noteNeutralIcon,
      icon: statStudents,
    },
    {
      label: "VERIFIED RECRUITERS",
      value: "3,142",
      note: "14 pending review",
      noteType: "warn",
      noteIcon: noteWarnIcon,
      icon: statRecruiters,
    },
    {
      label: "PARTNER COMPANIES",
      value: "312",
      note: "Stable Growth",
      noteType: "muted",
      noteIcon: noteMutedIcon,
      icon: statCompanies,
    },
  ];

  return (
    <div className="statsCards-container">
      {cards.map((card, index) => (
        <div key={index} className="statsCard">
          <div className="statsCard-header">
            <span className="statsCard-label">{card.label}</span>
            <div className="statsCard-iconWrapper">
              <img src={card.icon} alt={card.label} />
            </div>
          </div>
          <div className="statsCard-value">{card.value}</div>
          <div className={`statsCard-note statsCard-note--${card.noteType}`}>
            {card.noteIcon && (
              <img src={card.noteIcon} alt="" className="statsCard-noteIcon" />
            )}
            <span>{card.note}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;