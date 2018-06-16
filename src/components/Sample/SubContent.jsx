import _ from 'lodash';
import { hot } from 'base';
import React, { PureComponent } from 'react';


@hot(module)
class SubContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
    };
  }

  handleChange = (e) => {
    e.persist();
    this.handleChangeAction(e);
  };

  handleChangeAction = _.debounce((e) => {
    const { value: input } = e.target;
    this.setState({ input });
  }, 250);

  render() {
    console.log('render SubContent');
    return (
      <div>
        test

        <input
          type="text"
          size="12"
          className="form-control form-control-sm"
          onChange={this.handleChange}
          defaultValue={this.state.input}
        />
      </div>
    );
  }
}

export default SubContent;
