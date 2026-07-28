import "./PlacementPerformance.css";

const PlacementPerformance = () => {
  const months = [
    { label: "Jan", height: "115.19px", value: 38 },
    { label: "Feb", height: "166.39px", value: 62 },
    { label: "Mar", height: "140.80px", value: 48 },
    { label: "Apr", height: "217.59px", value: 88 },
    { label: "May", height: "192px", value: 70 },
    { label: "Jun", height: "243.19px", value: 100, isHighlight: true },
  ];

  return (
    <div className="placementPerformance-card">
      <div className="placementPerformance-header">
        <div className="placementPerformance-leftContent">
          <h3 className="placementPerformance-title">Placement Performance</h3>
          <p className="placementPerformance-subtitle">
            Monthly placement success trends
          </p>
        </div>
        <div className="placementPerformance-legend">
          <span className="placementPerformance-legendDot" />
          <span className="placementPerformance-legendText">Placements</span>
        </div>
      </div>
      
      <div className="placementPerformance-chartWrap">
        <div className="placementPerformance-columns">
          {months.map((item, index) => (
            <div className="placementPerformance-columnItem" key={index}>
              <div 
                className={`placementPerformance-bar ${item.isHighlight ? "highlight" : ""}`}
                style={{ height: item.height }}
                title={`${item.label}: ${item.value}`}
              />
              <span className="placementPerformance-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementPerformance;