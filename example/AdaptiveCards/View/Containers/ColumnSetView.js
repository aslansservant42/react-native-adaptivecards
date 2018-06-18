import React from 'react';
import { View, } from 'react-native';
import { DecCardElementView } from '../Basic/DecCardElementView';
import { DecCardElementWrapper } from '../Basic/DecCardElementWrapper';
export class ColumnSetView extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renderColumn = (column, index) => {
            return (React.createElement(DecCardElementView, { key: 'column' + index, index: index, containerWidth: this.state.viewWidth, element: column }));
        };
        this.onLayout = (event) => {
            if (!this.isComponentUnmounted && !this.state.viewWidth && this.hasFixedWidthColumns) {
                this.setState({
                    viewWidth: event.nativeEvent.layout.width,
                });
            }
        };
        this.state = {
            viewWidth: 0,
        };
        const { element } = props;
        this.hasFixedWidthColumns = element.columns.some(item => item.isFixedWidth());
        this.isEqualDistribution = element.columns.every(item => item.isFixedWidth());
    }
    componentWillUnmount() {
        this.isComponentUnmounted = true;
    }
    render() {
        const { element, index } = this.props;
        if (!element || !element.isValid() || !element.hasColumns()) {
            return null;
        }
        return (React.createElement(DecCardElementWrapper, { element: element, index: index, style: {
                flex: 1,
            } },
            React.createElement(View, { style: {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: this.isEqualDistribution ? 'space-between' : 'flex-start',
                }, onLayout: this.onLayout }, element.columns.map(this.renderColumn))));
    }
}
