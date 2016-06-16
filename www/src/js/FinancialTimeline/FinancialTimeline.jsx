import { markers } from './Markers.jsx';
export function financialTimeline({ React }) {
  const Markers = markers({ React });

  return function FinancialTimeline(props) {
    const {userData, configData} = props;
    const {threshold, deductible, title, measure} = configData;
    const userPaid = userData.map((obj) => (
      obj.amountMemberPaid
    )).reduce((a, b) => (a + b));

    return Object.assign({}, React.Component.prototype, {
      props,

      buildTitle(txt){
        // use deductbile amount if available, otherwise threashold
        const total = (deductible) ? deductible.amount : threshold.amount;
        const amountLeft = total - userPaid;
        const result = (amountLeft > 0) ? amountLeft : 0;
        const roundResult = Math.ceil(result*100)/100;
        return txt.replace('$','|$'+roundResult+'|').split('|').map((blrb, idx) => (
          <span key={idx}
            className={this.titleBlrbClass(idx)}>
            {blrb}
          </span>
        ));
      },

      titleBlrbClass(idx){
        return (idx === 1) ? "timeline-titleAmount" : null;
      },

      render() {
        return (
          <div>
            <h4>{this.buildTitle(title)}</h4>
            <div className="timeline-outsideContainer">
              <div className="timeline-insideContainer">
                <Markers {...configData} userPaid={userPaid} />
                <div className="timeline-measureFilled"
                  style={{width:(userPaid/threshold.amount*100)+'%'}} />
                <div className="timeline-measureBg" />
              </div>
            </div>
          </div>
        );
      },
    });
  };
}
