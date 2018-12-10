import React from "react";

interface State {
  programs?: Array<any>;
}

interface Props {
  name: string;
}

export class CustomComponentWithProps extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      programs: undefined
    };
  }
  componentDidMount() {
    // const params = {
    //   take: 10
    // };
    // ProgramsApi.v10ProgramsGet(
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   ProgramBalanceChart.ProgramCurrencyEnum.ADA.toString(),
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   10,
    //   undefined
    // );
  }
  render() {
    const { name } = this.props;
    return <div>My TS Component With props {name}</div>;
  }
}
