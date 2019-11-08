import * as React from 'react';
import {List, Checkbox} from 'react-native-paper';

interface props {
  title: String;
}

class SkillAccordion extends React.Component<props> {
  state = {
    expanded: true,
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
    });

  render() {
    return (
      <List.Accordion
        title={this.props.title}
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    );
  }
}

export default SkillAccordion;
