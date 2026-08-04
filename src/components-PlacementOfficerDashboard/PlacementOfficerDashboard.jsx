import React, { useEffect, useMemo, useState } from "react";
import { FiSearch, FiUserPlus, FiCalendar, FiSend } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { MdChat, MdOutlineEventNote } from "react-icons/md";
import "./PlacementOfficerDashboard.css";

const departments = [
  { name: "CSE", percent: "20%", color: "#B46BEA" },
  { name: "ECE", percent: "15%", color: "#EB83EA" },
  { name: "MECH", percent: "10%", color: "#6409FF" },
  { name: "EEE", percent: "10%", color: "#7992E6" },
  { name: "IT", percent: "20%", color: "#6ECEE9" },
];

export const DownArrow = () => (
  <svg
    className="placement_pipeline_down-arrow"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8D61D7"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="4" x2="12" y2="20"></line>
    <polyline points="18 14 12 20 6 14"></polyline>
  </svg>
);

const DEFAULT_ACTIVITIES = [
  { id: 1, text: "Rahul uploaded new resume", time: "2 min ago" },
  { id: 2, text: "TCS Campus Drive Created", time: "15 min ago" },
  { id: 3, text: "45 Students registered for Infosys", time: "55 min ago" },
  { id: 4, text: "Placement report generated", time: "2 hrs ago" },
  {
    id: 5,
    text: "Interview schedule released for TCS drive",
    time: "11:00 AM",
  },
  {
    id: 6,
    text: "Interview schedule released for Wipro drive",
    time: "1 hr ago",
  },
  { id: 7, text: "35 students registered for TCS", time: "3 hrs ago" },
];

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const TARGET_DATE = new Date(2026, 6, 25);

function toKey(date) {
  return date.toISOString().slice(0, 10);
}

function buildDefaultInterviews(baseDate = TARGET_DATE) {
  const key = toKey(baseDate);
  const atTime = (h, m) => {
    const d = new Date(baseDate);
    d.setHours(h, m, 0, 0);
    return d.toISOString();
  };

  return {
    [key]: [
      {
        id: "infosys-1",
        company: "Infosys",
        role: "UI/UX Designer Role",
        studentCount: 18,
        startTime: atTime(10, 30),
        endTime: atTime(11, 30),
        meetingType: "Google Meet",
        meetingLink: "#",
        overrideLabel: "Starts in 1 hour",
        overrideTone: "live",
      },
      {
        id: "tcs-1",
        company: "TCS",
        role: "Data Analyst Role",
        studentCount: 10,
        startTime: atTime(15, 30),
        endTime: atTime(16, 30),
        meetingType: "Google Meet",
        meetingLink: "#",
        overrideLabel: "Starts in 20 mins",
        overrideTone: "soon",
      },
    ],
  };
}

function formatTime(iso) {
  const d = new Date(iso);
  let hours = d.getHours();
  const minutes = d.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours}:${minutes} ${ampm}`;
}

function getCountdownLabel(startIso) {
  const diffMs = new Date(startIso).getTime() - Date.now();
  if (diffMs <= 0) return { label: "In progress", tone: "live" };

  const totalMinutes = Math.round(diffMs / 60000);
  if (totalMinutes < 60) {
    return { label: `Starts in ${totalMinutes} mins`, tone: "soon" };
  }
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const hourLabel = `${hours} hour${hours > 1 ? "s" : ""}`;
  return {
    label:
      mins > 0 ? `Starts in ${hourLabel} ${mins}m` : `Starts in ${hourLabel}`,
    tone: "later",
  };
}

function buildWeek(anchorDate) {
  const week = [];
  for (let offset = -5; offset <= 3; offset += 1) {
    const d = new Date(anchorDate);
    d.setDate(d.getDate() + offset);
    week.push(d);
  }
  return week;
}
 

export default function PlacementOfficer() { 
  const dataDate = TARGET_DATE;
  const resolvedInterviews = buildDefaultInterviews(dataDate);
  const [selectedDate, setSelectedDate] = useState(dataDate);
  const [, forceTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => forceTick((n) => n + 1), 30000);
    return () => clearInterval(interval);
  }, []);

  const week = useMemo(() => buildWeek(selectedDate), [selectedDate]);
  const selectedKey = toKey(selectedDate);
  const interviews = resolvedInterviews[selectedKey] || [];
 
  const pipelineSteps = [
    { text: "Training Completed", number: 1250 },
    { text: "Resume Verified", number: 1125 },
    { text: "Profiles sent", number: 842 },
    { text: "Interview Scheduled", number: 842 },
  ];

  // Statistics Data
  const chartData = [
    { month: "Jan", applied: 35, offered: 20 },
    { month: "Feb", applied: 32, offered: 32 },
    { month: "Mar", applied: 42, offered: 25 },
    { month: "Apr", applied: 42, offered: 32 },
    { month: "May", applied: 30, offered: 28 },
    { month: "Jun", applied: 42, offered: 28 },
    { month: "Jul", applied: 35, offered: 35 },
    { month: "Aug", applied: 45, offered: 30 },
    { month: "Sep", applied: 30, offered: 38 },
    { month: "Oct", applied: 38, offered: 38 },
    { month: "Nov", applied: 40, offered: 35 },
    { month: "Dec", applied: 40, offered: 38 },
  ];
  const yAxisValues = [100, 80, 60, 40, 20, 0];

  // Stat Cards Data
  const stats = [
    {
      id: 1,
      value: "1250",
      title: "Total Students",
      highlight: "+12%",
      suffix: " this month",
      bg: "rgba(38, 132, 252, 0.1)",
    },
    {
      id: 2,
      value: "842",
      title: "Placed Students",
      highlight: "+67%",
      suffix: " this month",
      bg: "rgba(233, 66, 53, 0.1)",
    },
    {
      id: 3,
      value: "56",
      title: "Companies",
      highlight: "+6",
      suffix: "",
      bg: "rgba(0, 172, 71, 0.1)",
    },
    {
      id: 4,
      value: "11",
      title: "Upcoming Drives",
      highlight: "+4",
      suffix: " this month",
      bg: "rgba(203, 195, 213, 0.2)",
    },
  ];

  // Quick Actions Data
  const actions = [
    {
      id: 1,
      title: "Add Profiles",
      icon: <FiUserPlus />,
      bg: "rgba(38, 132, 252, 0.1)",
      color: "#2684FC",
    },
    {
      id: 2,
      title: "Mock Interview",
      icon: <MdOutlineEventNote />,
      bg: "rgba(233, 66, 53, 0.1)",
      color: "#E94235",
    },
    {
      id: 3,
      title: "Schedule Drive",
      icon: <FiCalendar />,
      bg: "rgba(0, 172, 71, 0.1)",
      color: "#00AC47",
    },
    {
      id: 4,
      title: "Send Notice",
      icon: <FiSend />,
      bg: "rgba(203, 195, 213, 0.2)",
      color: "#8D61D7",
    },
  ];

  // Top Companies Data
  const companies = [
    { id: "infosys", name: "Infosys", count: 124, fillPercentage: 63.5 },
    { id: "zoho", name: "Zoho", count: 98, fillPercentage: 49.0 },
    { id: "wipro", name: "Wipro", count: 76, fillPercentage: 34.4 },
  ];

  // Upcoming Drives Data
  const drives = [
    {
      id: 1,
      company: "Infosys",
      date: "25 July 2025",
      time: "10:00 AM",
      branch: "B.Tech - CSE,IT,ECE",
      logo: "Infosys",
      logoColor: "#2F8ADD",
    },
    {
      id: 2,
      company: "TCS",
      date: "27 July 2025",
      time: "9:30 AM",
      branch: "B.Tech - All Branches",
      logo: "TCS",
      logoColor: "#2F8ADD",
    },
    {
      id: 3,
      company: "Accenture",
      date: "25 July 2025",
      time: "11:30 AM",
      branch: "B.Tech - CSE, IT",
      logo: "accenture",
      logoColor: "#8D61D7",
    },
  ];

  // Priorities Data
  const tasks = [
    "Review 12 resumes",
    "Conduct 8 mock interviews",
    "15 students ready to submit",
    "Interview schedules awaiting",
  ];

  return (
    <div className="app-main-layout">
      <aside className="app-sidebar-placeholder"></aside>

      <main className="app-main-content"> 
        <div className="app-top-section"> 
          <header className="po-header">
            <div className="po-header-search">
              <FiSearch className="po-header-search-icon" />
              <input type="text" placeholder="Search companies, drives...," />
            </div>
            <div className="po-header-right">
              <div className="po-header-icon-box po-header-notification">
                <FaBell className="po-header-icon" />
                <span className="po-header-badge">5</span>
              </div>
              <div className="po-header-icon-box po-header-chat">
                <MdChat className="po-header-icon" />
                <span className="po-header-badge">3</span>
              </div>
              <div className="po-header-profile">
                <img
                  src="https://i.pravatar.cc/150?img=32"
                  alt="Priyanka"
                  className="po-header-profile-img"
                />
                <div className="po-header-profile-info">
                  <h4 className="po-header-profile-name">Priyanka</h4>
                  <p className="po-header-profile-role">Placement Officer</p>
                </div>
              </div>
            </div>
          </header>

          {/* Stat Cards */}
          <div className="po-stats-container">
            {stats.map((item) => (
              <div
                className="po-stat-card"
                key={item.id}
                style={{ backgroundColor: item.bg }}
              >
                <h2 className="po-stat-value">{item.value}</h2>
                <p className="po-stat-title">{item.title}</p>
                <p className="po-stat-change">
                  <span className="po-stat-highlight">{item.highlight}</span>
                  {item.suffix}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="app-dashboard-columns"> 
          <div className="app-column-left"> 
            <div className="placement_pipeline_container">
              <div className="placement_pipeline_header">
                <h2>Placement Pipeline</h2>
                <p>Student's Placement Journey.</p>
              </div>
              <div className="placement_pipeline_steps">
                {pipelineSteps.map((s, idx) => (
                  <React.Fragment key={s.text + idx}>
                    <div className="placement_pipeline_step-box">
                      <span className="placement_pipeline_step-text">
                        {s.text}
                      </span>
                      <span className="placement_pipeline_step-number">
                        {s.number}
                      </span>
                    </div>
                    {idx !== pipelineSteps.length - 1 && <DownArrow />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Upcoming Drives */}
            <div className="ud-card">
              <div className="ud-header">
                <h2 className="ud-title">Upcoming Drives</h2>
                <button className="ud-view-btn">View All</button>
              </div>
              <div className="ud-list">
                {drives.map((drive) => (
                  <div className="ud-drive-item" key={drive.id}>
                    <div className="ud-company-logo">
                      <span style={{ color: drive.logoColor }}>
                        {drive.logo}
                      </span>
                    </div>
                    <div className="ud-drive-details">
                      <h3 className="ud-company-name">{drive.company}</h3>
                      <p className="ud-date-time">
                        {drive.date} . {drive.time}
                      </p>
                      <p className="ud-branch">{drive.branch}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Placement Statistics */}
            <div className="placement_statistics_container">
              <div className="placement_statistics_header">
                <h2 className="placement_statistics_title">
                  Placement Statistics
                </h2>
                <div className="placement_statistics_legend">
                  <div className="placement_statistics_legend_item">
                    <span className="placement_statistics_legend_dot placement_statistics_dot_offered"></span>
                    <span className="placement_statistics_legend_text">
                      Offered Students
                    </span>
                  </div>
                  <div className="placement_statistics_legend_item">
                    <span className="placement_statistics_legend_dot placement_statistics_dot_applied"></span>
                    <span className="placement_statistics_legend_text">
                      Applied Students
                    </span>
                  </div>
                </div>
              </div>
              <div className="placement_statistics_chart_area">
                <div className="placement_statistics_y_axis">
                  {yAxisValues.map((value) => (
                    <span key={value} className="placement_statistics_y_value">
                      {value}
                    </span>
                  ))}
                </div>
                <div className="placement_statistics_graph">
                  {chartData.map((data) => (
                    <div
                      key={`${data.month}-${data.applied}-${data.offered}`}
                      className="placement_statistics_column"
                    >
                      <div className="placement_statistics_bars_wrapper">
                        <div
                          className="placement_statistics_bar placement_statistics_bar_offered"
                          style={{ height: `${data.offered}%` }}
                        ></div>
                        <div
                          className="placement_statistics_bar placement_statistics_bar_applied"
                          style={{ height: `${data.applied}%` }}
                        ></div>
                      </div>
                      <span className="placement_statistics_x_label">
                        {data.month}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="ra-card">
              <div className="ra-header">
                <h2 className="ra-title">Recent Activities</h2>
                <button type="button" className="ra-view-all">
                  View All
                </button>
              </div>
              <ul className="ra-list">
                {DEFAULT_ACTIVITIES.map((activity) => (
                  <li key={activity.id} className="ra-item">
                    <span className="ra-text">{activity.text}</span>
                    <span className="ra-time">{activity.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="app-column-right"> 
            <div className="tp-card">
              <h2 className="tp-title">Today’s Priority</h2>
              <div className="tp-task-list">
                {tasks.map((task, index) => (
                  <div className="tp-task-box" key={index}>
                    {task}
                  </div>
                ))}
              </div>
              <div className="tp-footer">
                <button className="tp-view-btn">
                  View Task
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6H15.5M15.5 6L11 1.5M15.5 6L11 10.5"
                      stroke="#8D61D7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="qa-card">
              <h2 className="qa-title">Quick Actions</h2>
              <div className="qa-grid">
                {actions.map((action) => (
                  <button
                    key={action.id}
                    className="qa-action-card"
                    style={{ background: action.bg }}
                  >
                    <span
                      className="qa-action-icon"
                      style={{ color: action.color }}
                    >
                      {action.icon}
                    </span>
                    <span className="qa-action-title">{action.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Recruiting Companies */}
            <div className="top_recruiting_company_container">
              <h2 className="top_recruiting_company_title">
                Top Recruiting Companies
              </h2>
              <div className="top_recruiting_company_list">
                {companies.map((company) => (
                  <div key={company.id} className="top_recruiting_company_row">
                    <div className="top_recruiting_company_info">
                      <span className="top_recruiting_company_dot"></span>
                      <span className="top_recruiting_company_name">
                        {company.name}
                      </span>
                    </div>
                    <div className="top_recruiting_company_bar_track">
                      <div
                        className="top_recruiting_company_bar_fill"
                        style={{ width: `${company.fillPercentage}%` }}
                      ></div>
                    </div>
                    <span className="top_recruiting_company_count">
                      {company.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Placement */}
            <div className="dp-card">
              <h2 className="dp-title">Department Wise Placement</h2>
              <div className="dp-content">
                <div className="dp-chart-container">
                  <div className="dp-donut"></div>
                  <div className="dp-chart-text">
                    <h3>1250</h3>
                    <p>100%</p>
                  </div>
                </div>
                <div className="dp-legend">
                  {departments.map((item, index) => (
                    <div className="dp-legend-item" key={index}>
                      <span
                        className="dp-legend-dot"
                        style={{ backgroundColor: item.color }}
                      ></span>
                      <span className="dp-legend-name">{item.name}</span>
                      <span className="dp-legend-value">{item.percent}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Placement Calendar */}
            <div className="pc-card">
              <div className="pc-header">
                <h2 className="pc-title">Placement Calendar</h2>
                <p className="pc-subtitle">
                  Below are the interview's you have scheduled for today.
                </p>
              </div>
              <div className="pc-week-strip">
                {week.map((date) => {
                  const isSelected = toKey(date) === selectedKey;
                  return (
                    <button
                      key={toKey(date)}
                      type="button"
                      className={`pc-day${isSelected ? " pc-day-selected" : ""}`}
                      onClick={() => setSelectedDate(date)}
                      aria-pressed={isSelected}
                    >
                      <span className="pc-day-label">
                        {DAY_LABELS[date.getDay()]}
                      </span>
                      <span className="pc-day-number">{date.getDate()}</span>
                    </button>
                  );
                })}
              </div>
              {interviews.length === 0 ? (
                <p className="pc-empty">
                  No interviews scheduled for this day.
                </p>
              ) : (
                <div className="pc-interview-grid">
                  {interviews.map((interview) => {
                    const dynamicCountdown = getCountdownLabel(
                      interview.startTime,
                    );
                    const labelText =
                      interview.overrideLabel || dynamicCountdown.label;
                    const labelTone =
                      interview.overrideTone || dynamicCountdown.tone;

                    return (
                      <div className="pc-interview" key={interview.id}>
                        <div className="pc-company-row">
                          <span className="pc-company-badge">
                            {interview.company}
                          </span>
                          <h3 className="pc-company-name">
                            {interview.company}
                          </h3>
                        </div>
                        <p className="pc-time">
                          {formatTime(interview.startTime)} -{" "}
                          {formatTime(interview.endTime)}
                        </p>
                        <p className="pc-role">{interview.role}</p>
                        <p className="pc-students">
                          {interview.studentCount} Students
                        </p>
                        <p className="pc-meeting">
                          Meeting :{" "}
                          <a
                            href={interview.meetingLink}
                            className="pc-meeting-link"
                          >
                            {interview.meetingType}
                          </a>
                        </p>
                        <p className={`pc-countdown pc-countdown-${labelTone}`}>
                          {labelText}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
