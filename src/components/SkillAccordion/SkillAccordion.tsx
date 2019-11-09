import * as React from 'react';
import {List, Checkbox} from 'react-native-paper';

interface props {
  title: String;
  skillGroup: any;
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
        {this.props.skillGroup.map(skill => <List.Item title={skill.name} />)}
      </List.Accordion>
    );
  }
}

export default SkillAccordion;
