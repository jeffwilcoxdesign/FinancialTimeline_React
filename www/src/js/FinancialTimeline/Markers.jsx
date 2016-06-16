import { marker } from './Marker.jsx';
export function markers({ React }) {
  const Marker = marker({ React });

  return function Markers(props) {
    const {threshold, deductible, measure, userPaid} = props;

    return Object.assign({}, React.Component.prototype, {
      props,

      buildDeductible(){
        return (
          <Marker className="timeline-bottomMarker"
            measure={deductible.label}
            amount={deductible.amount}
            width={(deductible.amount/threshold.amount*100)} />
        )
      },

      render() {
        return (
          <div>
            {(deductible) ? this.buildDeductible() : null}
            <Marker className="timeline-topMarker"
              measure={measure}
              amount={userPaid}
              width={(userPaid/threshold.amount*100)} />
            <Marker className="timeline-bottomMarker"
              measure={threshold.label}
              amount={threshold.amount}
              width={'100'} />
          </div>
        );
      },
    });
  };
}
