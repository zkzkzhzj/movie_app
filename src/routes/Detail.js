import React from "react";

// 여기서 전달받은 props 를보면
// location 과 history 
// route 에서 Link 로 전달 받은 props 인데
// history 는 주소값 데이터 즉 / 는 초기에 설정한 home 으로 보내버리는 것
// location 에 데이터가 들어있는데 값이없을 경우 보냄
class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}
// 여기서 왜 체크했냐면 새로고침이나 주소입력으로오면
// 상세정보가 없기때문에 render -> didmount 잖아
// 근데 title 없다고 에러떠서 / 못가기 때문에
// 체크를 해줌

export default Detail;