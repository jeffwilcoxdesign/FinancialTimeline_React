export function marker({ React }) {

  return function Marker(props) {
    const {amount, width, measure, className} = props;
    const timelineWidth = 400;
    const labelWidth = 180;
    
    return Object.assign({}, React.Component.prototype, {
      props,

      centerLabel(width, labelWidth, timelineWidth){
        return {
          left: -((labelWidth/2)-(width/100*timelineWidth))+'px'
        };
      },

      addLineBreaks(measure){
        return measure.split("\n").map(function(item, idx) {
          return (
            <span key={idx}>
              {item}
              <br/>
            </span>
          )}
        )
      },

      render() {
        return (
          <div className={className}
            style={{width:width+'%'}}>
            <div className="timeline-markerLabel"
              style={this.centerLabel(width, labelWidth, timelineWidth)}>
              <p className="timeline-markerCopy">
                {this.addLineBreaks(measure)}
              </p>
              <p className="timeline-markerAmount">
                {'$'+amount.toLocaleString()}
              </p>
            </div>
          </div>
        );
      },
    });
  };
}
